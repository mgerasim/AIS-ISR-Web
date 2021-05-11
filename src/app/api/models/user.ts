/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { Division } from './division';
import { ResponsibilityCenter } from './responsibility-center';
export interface User {
  account?: Account;
  accountId?: number;
  allowEmail?: boolean;
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  department?: null | string;
  displayName?: null | string;
  division?: Division;
  divisionId?: null | number;
  emailAddress?: null | string;
  employeeId?: null | string;
  enabled?: boolean;
  id?: number;
  name?: null | string;
  responsibilityCenters?: null | Array<ResponsibilityCenter>;
  samAccountName?: null | string;
  sid?: null | string;
  surname?: null | string;
  thumbnailPhoto?: null | string;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
  userPrincipalName?: null | string;
  voiceTelephoneNumber?: null | string;
}
