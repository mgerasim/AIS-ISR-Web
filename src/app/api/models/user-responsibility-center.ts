/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { ResponsibilityCenter } from './responsibility-center';
import { User } from './user';
export interface UserResponsibilityCenter {
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  id?: number;
  responsibilityCenter?: ResponsibilityCenter;
  responsibilityCenterId?: number;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
  user?: User;
  userId?: number;
}
