/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { CorrectiveActionStatus } from './corrective-action-status';
import { Equipment } from './equipment';
import { User } from './user';
export interface CorrectiveAction {
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  equipment?: Equipment;
  equipmentId?: number;
  id?: number;
  performer?: User;
  performerId?: null | number;
  scheduledComplationDate?: string;
  status?: CorrectiveActionStatus;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
}
