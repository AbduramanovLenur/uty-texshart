import type { Periods } from '../constants/periods';

export type TPeriod = (typeof Periods)[keyof typeof Periods];
