import type { Actions } from '../constants/actions';

export type TAction = (typeof Actions)[keyof typeof Actions];
