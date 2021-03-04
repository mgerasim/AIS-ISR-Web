/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
export interface File {
  content?: null | string;
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  id?: number;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
}
