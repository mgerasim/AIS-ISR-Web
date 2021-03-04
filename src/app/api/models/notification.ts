/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { Equipment } from './equipment';
import { Importance } from './importance';
import { Incident } from './incident';
import { NotificationType } from './notification-type';
export interface Notification {
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  equipment?: Equipment;
  equipmentId?: null | number;
  id?: number;
  importance?: Importance;
  incident?: Incident;
  incidentId?: null | number;
  notificationType?: NotificationType;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
}
