import type { Permissions } from '../constants/permissions';

export type TPermission = (typeof Permissions)[keyof typeof Permissions];
