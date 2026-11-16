import type { AuthTypes } from '../constants/auth-types';

export type TAuthType = (typeof AuthTypes)[keyof typeof AuthTypes];
