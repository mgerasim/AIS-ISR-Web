/* tslint:disable */
/* eslint-disable */
import { Role } from './role';
import { User } from './user';
export interface Account {
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  id?: number;
  passwordHash?: null | string;
  role?: Role;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
  user?: User;
}
