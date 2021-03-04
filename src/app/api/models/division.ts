/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
export interface Division {
  children?: null | Array<Division>;
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  id?: number;
  parent?: Division;
  parentId?: null | number;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
}
