/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { CertificateAgent } from './certificate-agent';
import { CertificateType } from './certificate-type';
export interface Certificate {
  certificateAgent?: CertificateAgent;
  certificateAgentId?: number;
  certificateType?: CertificateType;
  certificateTypeId?: number;
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  date?: string;
  deletedBy?: Account;
  deletedById?: null | number;
  id?: number;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
}
