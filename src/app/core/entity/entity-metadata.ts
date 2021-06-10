import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Certificate: {},
  Equipment: {},
  ResponsibilityCenter: {},
  Division: {},
  Attachment: {},
  Examination: {},
  CertificateAgent: {},
  CertificateType: {},
  Notification: {},
  Incident: {},
  UserNotification: {},
  User: {},
  Account: {},
  UserResponsibilityCenter: {},
  CorrectiveAction: {},
  Faq: {},
};

const pluralNames = {  Equipment: 'Equipments'};

export const entityConfig = {
  entityMetadata,
  pluralNames
};



