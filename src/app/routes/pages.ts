import { lazyPage } from '@shared/utils';

export const AuthPage = lazyPage(() => import('@pages/auth').then((module) => ({ default: module.AuthPage })));
