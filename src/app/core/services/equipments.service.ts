import { Injectable } from '@angular/core';
import {
  EntityActionOptions,
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import {Equipment} from '../../api/models/equipment';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EquipmentsService extends EntityCollectionServiceBase<Equipment> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Equipment', serviceElementsFactory);
  }
  update(entity: Partial<Equipment>, options?: EntityActionOptions): Observable<Equipment> {
    return super.update(entity, options);
  }
}
