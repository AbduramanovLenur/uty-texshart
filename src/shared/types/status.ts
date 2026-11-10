import type { Statuses } from '../config';

export type TStatus = (typeof Statuses)[keyof typeof Statuses];
