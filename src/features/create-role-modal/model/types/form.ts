import type { FormFields } from '../constants/form-fields';

export type TFormField = (typeof FormFields)[keyof typeof FormFields];

export interface IFormValues {
  [FormFields.NAME]: string;
  [FormFields.DESCRIPTION]?: string;
}
