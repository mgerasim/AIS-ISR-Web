/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { Incident } from './incident';
import { IncidentImportance } from './incident-importance';
export interface IncidentLog {
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  id?: number;
  importance?: IncidentImportance;
  incident?: Incident;
  incidentId?: number;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
}
