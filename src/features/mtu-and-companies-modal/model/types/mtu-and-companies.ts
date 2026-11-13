import type { MtuAndCompaniesTypes } from '../constants/mtu-and-companies-types';

export type TMtuAndCompaniesType =
  (typeof MtuAndCompaniesTypes)[keyof typeof MtuAndCompaniesTypes];
