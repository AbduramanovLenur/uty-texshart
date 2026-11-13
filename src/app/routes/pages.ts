import { lazyPage } from '@shared/utils';

export const AuthPage = lazyPage(() => import('@pages/auth').then((module) => ({ default: module.AuthPage })));
export const RegisterPage = lazyPage(() => import('@pages/register').then((module) => ({ default: module.RegisterPage })));
export const DashboardPage = lazyPage(() => import('@pages/dashboard').then((module) => ({ default: module.DashboardPage })));
export const ApplicationsPage = lazyPage(() => import('@pages/applications').then((module) => ({ default: module.ApplicationsPage })));
export const ApplicationPage = lazyPage(() => import('@pages/application').then((module) => ({ default: module.ApplicationPage })));
export const CreateApplicationPage = lazyPage(() => import('@pages/create-application').then((module) => ({ default: module.CreateApplicationPage })));
export const NotificationsPage = lazyPage(() => import('@pages/notifications').then((module) => ({ default: module.NotificationsPage })));
export const PaymentHistoryPage = lazyPage(() => import('@pages/payment-history').then((module) => ({ default: module.PaymentHistoryPage })));
export const TechnicalSpecificationsPage = lazyPage(() => import('@pages/technical-specifications').then((module) => ({ default: module.TechnicalSpecificationsPage })));
export const ProfilePage = lazyPage(() => import('@pages/profile').then((module) => ({ default: module.ProfilePage })));
export const UsersPage = lazyPage(() => import('@pages/users').then((module) => ({ default: module.UsersPage })));
export const ReferenceDataPage = lazyPage(() => import('@pages/reference-data').then((module) => ({ default: module.ReferenceDataPage })));
export const MtuAndCompaniesPage = lazyPage(() => import('@pages/mtu-and-companies').then((module) => ({ default: module.MtuAndCompaniesPage })));
