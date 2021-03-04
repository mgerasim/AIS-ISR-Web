import {EntityCollectionDataService, QueryParams} from "@ngrx/data";
import {Update} from "@ngrx/entity";
import {Observable} from "rxjs";
import {CustomEntityDataServiceOptions} from "./custom-entity-data-service-options";

export class CustomEntityDataService<T> implements EntityCollectionDataService<T> {
  constructor(public name: string, private options: CustomEntityDataServiceOptions<T>) {}

  add(entity: T): Observable<T> {
    throw new Error('not implemented');
  }

  delete(id: any): Observable<number | string> {
    throw new Error('not implemented');
  }

  getAll(): Observable<T[]> {
    if (this.options.getAll) {
      return this.options.getAll();
    } else {
      throw new Error('not implemented');
    }
  }

  getById(id: any): Observable<T> {
    if (this.options.getById) {
      return this.options.getById(id);
    } else {
      throw new Error('not implemented');
    }
  }

  getWithQuery(params: string | QueryParams): Observable<T[]> {
    throw new Error('not implemented');
  }

  update(update: Update<T>): Observable<T> {
    throw new Error('not implemented');
  }

  upsert(entity: T): Observable<T> {
    throw new Error('not implemented');
  }
}
