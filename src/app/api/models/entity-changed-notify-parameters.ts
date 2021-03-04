/* tslint:disable */
/* eslint-disable */
import { EntityOperationType } from './entity-operation-type';
import { EntityType } from './entity-type';
export interface EntityChangedNotifyParameters {
  entity?: null | any;
  entityId?: number;
  entityType?: EntityType;
  operation?: EntityOperationType;
}
