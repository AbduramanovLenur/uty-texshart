import type { FormFields } from '../constants/form-fields';

export type TFormField = (typeof FormFields)[keyof typeof FormFields];

export interface IUploadProjectFilesFormValues {
  [FormFields.FILE]?: File | null;
}
