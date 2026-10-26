import { lazyPage } from '@shared/utils';

export const AuthPage = lazyPage(() => import('@pages/auth').then((module) => ({ default: module.AuthPage })));
export const ApplicationsPage = lazyPage(() => import('@pages/applications').then((module) => ({ default: module.ApplicationsPage })));
export const NotificationsPage = lazyPage(() => import('@pages/notifications').then((module) => ({ default: module.NotificationsPage })));
