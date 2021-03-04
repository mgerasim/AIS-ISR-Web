import {EntityCollectionServiceBase, EntityCollectionServiceElementsFactory} from '@ngrx/data';
import {filter, map, startWith, switchMap, switchMapTo, take, tap} from 'rxjs/operators';
import {LazyLoaderFactoryService} from './lazy-loader-factory.service';
import {Observable, of} from 'rxjs';
import {muteFirst} from '../../shared/utils/rxjs-operators';
import {Dictionary} from '@ngrx/entity';

export class LazyEntityCollectionService<Entity> extends EntityCollectionServiceBase<Entity> {
    loadEntitiesIfRequired = this.lazyLoaderFactory
        .createLoader(this.loaded$, () => this.load())
        .pipe(startWith(false));

    constructor(
        entityName: string,
        elementsFactory: EntityCollectionServiceElementsFactory,
        private lazyLoaderFactory: LazyLoaderFactoryService
    ) {
        super(entityName, elementsFactory);
    }

    getListLazy(): Observable<Entity[]> {
        return muteFirst(
            // Запрашиваем список сущностей с сервера если это необходимо
            this.loadEntitiesIfRequired,
            // Возвращаем список из хранилища, если он уже загружен
            this.loaded$.pipe(
                filter(loaded => loaded),
                switchMapTo(this.entities$)
            )
        );
    }

    getMapLazy(): Observable<Dictionary<Entity>> {
        return muteFirst(
            // Запрашиваем список сущностей с сервера если это необходимо
            this.loadEntitiesIfRequired,
            // Возвращаем список из хранилища, если он уже загружен
            this.loaded$.pipe(
                filter(loaded => loaded),
                switchMapTo(this.entityMap$)
            )
        );
    }

    getByIdLazy(id: number): Observable<Entity> {
        return this.entityMap$.pipe(
            take(1),
            map(map => map[id]),
            switchMap(entity => {
                if (entity) {
                    return of(entity);
                }
                return this.getByKey(id);
            })
        );
    }
}
