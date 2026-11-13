import type { FormFields } from '../constants/form-fields';
import type { TMtuAndCompaniesType } from './mtu-and-companies';

export type TFormField = (typeof FormFields)[keyof typeof FormFields];

export interface IMtuAndCompaniesFormValues {
  [FormFields.TYPE]?: TMtuAndCompaniesType;
  [FormFields.COMPANY_TYPE]?: string;
  [FormFields.NAME]?: string;
  [FormFields.KM_PK]?: string;
  [FormFields.MTU_NAME]?: string;
}
