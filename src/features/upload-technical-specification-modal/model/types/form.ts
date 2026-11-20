import type { FormFields } from '../constants/form-fields';

export type TFormField = (typeof FormFields)[keyof typeof FormFields];

export interface IUploadTechSpecFormValues {
  [FormFields.FILE]?: File | null;
}
