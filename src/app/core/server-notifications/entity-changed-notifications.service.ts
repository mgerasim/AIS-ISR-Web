import {Injectable} from '@angular/core';
import {EntityChangedHubService} from './entity-changed-hub.service';
import {from, Observable, of} from 'rxjs';
import {catchError, finalize, map, shareReplay, switchMap} from 'rxjs/operators';
import {ErrorHandlerService} from '../errors/error-handler.service';

@Injectable({
    providedIn: 'root',
})
export class EntityChangedNotificationsService {
    constructor(
      private entityChangedHub: EntityChangedHubService,
      private errorHandler: ErrorHandlerService) {}

    subscribeEntityChanged(): Observable<any> {
        return this.subscribe();
    }

    subscribe(): Observable<any> {
        return this.subscribeInternal();
    }

    private subscribeInternal(): Observable<any> {
        return from(this.entityChangedHub.subscribe()).pipe(
            switchMap(x => this.entityChangedHub.entityChangedNotify$),
            catchError(error => {
                this.errorHandler.handle(error);
                return of('');
            }),
            shareReplay(1),
            finalize(() => {
                this.entityChangedHub
                    .unsubscribe()
                    .catch(error => this.errorHandler.handle(error));
            })
        );
    }
}
