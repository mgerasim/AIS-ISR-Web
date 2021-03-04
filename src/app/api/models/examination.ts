/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { Equipment } from './equipment';
import { ExaminationStatus } from './examination-status';
export interface Examination {
  comment?: null | string;
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  equipment?: Equipment;
  equipmentId?: number;
  examinationNextYear?: number;
  examinationNumber?: null | string;
  id?: number;
  registerNumber?: null | string;
  status?: ExaminationStatus;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
}
