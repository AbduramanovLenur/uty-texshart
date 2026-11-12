import type { FormFields } from '../constants/form-fields';
import type { TReferenceDataType } from './reference-data';

export type TFormField = (typeof FormFields)[keyof typeof FormFields];

export interface IReferenceDataFormValues {
  [FormFields.REFERENCE_TYPE]?: TReferenceDataType;
  [FormFields.COMMUNICATION_TYPE]?: string;
  [FormFields.CROSSING_METHOD]?: string;
  [FormFields.NAME]?: string;
  [FormFields.MEASUREMENT_UNIT]?: string;
  [FormFields.HAS_MULTIPLE_OPTIONS]?: boolean;
  [FormFields.OPTIONS]?: string[];
}
