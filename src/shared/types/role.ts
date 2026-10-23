import type { roles } from '../config';

export type Role = (typeof roles)[keyof typeof roles];
