import type { FormFields } from '../constants/form-fields';

export type TFormField = (typeof FormFields)[keyof typeof FormFields];

export interface ICreateUserFormValues {
  [FormFields.PINFL]?: string;
  [FormFields.FULL_NAME]?: string;
  [FormFields.POSITION]?: string;
  [FormFields.ROLE]?: string;
  [FormFields.REGIONAL_DEPARTMENT]?: string;
  [FormFields.PHONE]?: string;
  [FormFields.EMAIL]?: string;
  [FormFields.TELEGRAM_NOTIFICATIONS]?: boolean;
  [FormFields.COMMENT]?: string;
}
