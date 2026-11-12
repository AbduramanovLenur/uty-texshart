import type { ReferenceDataTypes } from '../constants/reference-data-types';

export type TReferenceDataType = (typeof ReferenceDataTypes)[keyof typeof ReferenceDataTypes];
