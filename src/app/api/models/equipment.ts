/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { Certificate } from './certificate';
import { Division } from './division';
import { Examination } from './examination';
import { ExploitationPeriodUnit } from './exploitation-period-unit';
import { ResponsibilityCenter } from './responsibility-center';
export interface Equipment {
  certificate?: Certificate;
  certificateId?: null | number;
  code: number;
  commissioningYear: number;
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  division?: Division;
  divisionId: number;
  examination?: Examination;
  examinationId?: null | number;
  exploitationPeriod: number;
  exploitationPeriodUnit: ExploitationPeriodUnit;
  id?: number;
  location?: null | string;
  overhaulDate?: null | string;
  registerNumber: string;
  releaseYear?: null | number;
  repairDate?: null | string;
  responsibilityCenter?: ResponsibilityCenter;
  responsibilityCenterId: number;
  serialNumber: string;
  shortCharacteristics?: null | string;
  techNumber: string;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
  wearPercentage?: number;
}
