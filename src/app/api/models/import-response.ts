/* tslint:disable */
/* eslint-disable */
import { ImportProcessorError } from './import-processor-error';
import { ImportProcessorState } from './import-processor-state';
export interface ImportResponse {
  fileName?: null | string;
  hasStart?: boolean;
  importProcessorErrors?: null | Array<ImportProcessorError>;
  importProcessorState?: ImportProcessorState;
  lineCount?: number;
  lineCurrentPosition?: number;
}
