/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { CharacteristicUnit } from './characteristic-unit';
export interface Characteristic {
  characteristicUnit?: CharacteristicUnit;
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
