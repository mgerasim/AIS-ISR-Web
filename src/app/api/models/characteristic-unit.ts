/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { Characteristic } from './characteristic';
export interface CharacteristicUnit {
  characteristics?: null | Array<Characteristic>;
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
