/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { Equipment } from './equipment';
export interface CorrectiveAction {
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  equipment?: Equipment;
  equipmentId?: number;
  id?: number;
  scheduledComplationDate?: string;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
}
