/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { Equipment } from './equipment';
import { IncidentImportance } from './incident-importance';
import { IncidentType } from './incident-type';
export interface Incident {
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  endDate?: null | string;
  equipment?: Equipment;
  equipmentId?: null | number;
  id?: number;
  importance?: IncidentImportance;
  incidentType?: IncidentType;
  isClosed?: boolean;
  startDate?: null | string;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
}
