/* tslint:disable */
/* eslint-disable */
import { Account } from './account';
import { AttachmentCategory } from './attachment-category';
import { Certificate } from './certificate';
import { Equipment } from './equipment';
import { File } from './file';
export interface Attachment {
  attachmentCategory?: AttachmentCategory;
  certificate?: Certificate;
  certificateId?: null | number;
  contentType?: null | string;
  createdAt?: string;
  createdBy?: Account;
  createdById?: number;
  deletedBy?: Account;
  deletedById?: null | number;
  equipment?: Equipment;
  equipmentId?: null | number;
  file?: File;
  fileId?: number;
  id?: number;
  lastModified?: number;
  size?: number;
  title: string;
  updatedAt?: string;
  updatedBy?: Account;
  updatedById?: number;
}
