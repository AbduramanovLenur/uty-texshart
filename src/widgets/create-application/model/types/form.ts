import type { FormFields } from '../constants/form-fields';

export type TFormField = (typeof FormFields)[keyof typeof FormFields];

export interface IFormValues {
  [FormFields.COMMUNICATION_TYPE]?: string;
  [FormFields.CROSSING_METHOD]?: string;
  [FormFields.VOLTAGE]?: string;
  [FormFields.CABLE_COUNT]?: number;
  [FormFields.CABLE_BRAND]?: string;
  [FormFields.WORK_METHOD]?: string;
  [FormFields.PROJECT_GOAL]?: string;
  [FormFields.LOCATION_PHOTOS]?: string[];
  [FormFields.COMMENT]?: string;
  [FormFields.COORDINATES]?: {
      lat: number;
      lng: number;
  };
  [FormFields.CERTIFICATE]?: string;
}
