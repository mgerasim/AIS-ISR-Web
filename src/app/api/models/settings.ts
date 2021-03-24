/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
export interface Settings {
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  equipmentWearThresholdExceededJobCriticalPercent: number;
  equipmentWearThresholdExceededJobWarningPercent: number;
  id?: number;
  importStartLine?: number;
  incidentAcceptedDuration: number;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
}
