import type { FormFields } from '../constants/form-fields';

export type TFormField = (typeof FormFields)[keyof typeof FormFields];

export interface IAssignEmployeeFormValues {
  [FormFields.EMPLOYEE]: string;
}
