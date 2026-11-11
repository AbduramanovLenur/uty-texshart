import type { FormFields } from '../constants/form-fields';

export type TFormField = (typeof FormFields)[keyof typeof FormFields];

export type TFormValues = Partial<Record<TFormField, unknown>>;
