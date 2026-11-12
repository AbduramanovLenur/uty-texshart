import type { TechnicalParameterFilterKeys } from '../constants/technical-parameter-filter-keys';

export type TTechnicalParameterFilterKey = (typeof TechnicalParameterFilterKeys)[keyof typeof TechnicalParameterFilterKeys];
