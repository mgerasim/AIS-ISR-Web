/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { User } from './user';
export interface ResponsibilityCenter {
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  description?: null | string;
  id?: number;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
  users?: null | Array<User>;
}
