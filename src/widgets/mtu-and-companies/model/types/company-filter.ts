import type { CompanyFilterKeys } from '../constants/company-filter-keys';

export type TCompanyFilterKey = (typeof CompanyFilterKeys)[keyof typeof CompanyFilterKeys];
