/* tslint:disable */
/* eslint-disable */
import { ExploitationPeriodUnit } from './exploitation-period-unit';
export interface BatchEquipmentOperationEditRequest {
  canCertificateEdit?: boolean;
  canCommissioningYearEdit?: boolean;
  canDivisionEdit?: boolean;
  canExploitationPeriodEdit?: boolean;
  canExploitationPeriodUnitEdit?: boolean;
  canLocationEdit?: boolean;
  canOverhaulDateEdit?: boolean;
  canRegisterNumberEdit?: boolean;
  canReleaseYearEdit?: boolean;
  canRepairDateEdit?: boolean;
  canResponsibilityCenterEdit?: boolean;
  canSerialNumberEdit?: boolean;
  canShortCharacteristicsEdit?: boolean;
  canTechNumberEdit?: boolean;
  certificateId?: number;
  commissioningYear?: number;
  divisionId?: number;
  equipmentIds?: null | Array<number>;
  exploitationPeriod?: number;
  exploitationPeriodUnit?: ExploitationPeriodUnit;
  location?: null | string;
  overhaulDate?: null | string;
  registerNumber?: null | string;
  releaseYear?: null | number;
  repairDate?: null | string;
  responsibilityCenterId?: number;
  serialNumber?: null | string;
  shortCharacteristics?: null | string;
  techNumber?: null | string;
}
