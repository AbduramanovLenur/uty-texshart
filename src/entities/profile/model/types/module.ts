import type { Modules } from '../constants/modules';

export type TModule = (typeof Modules)[keyof typeof Modules];
