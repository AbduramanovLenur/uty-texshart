import type { FormFields } from '../constants/form-fields';

export type TFormField = (typeof FormFields)[keyof typeof FormFields];

export interface IRegisterFormValues {
  [FormFields.PHONE]?: string;
  [FormFields.EMAIL]?: string;
  [FormFields.AGREED]?: boolean;
  [FormFields.SMS_CODE]?: string;
}
