import { createBrowserRouter } from 'react-router-dom';

import {
  AuthPage,
  LoginPage,
  RegisterPage,
  DashboardPage,
  ApplicationsPage,
  ApplicationPage,
  CreateApplicationPage,
  NotificationsPage,
  PaymentHistoryPage,
  TechnicalSpecificationsPage,
  CommunicationsRegisterPage,
  ProfilePage,
  UsersPage,
  UserPage,
  RolesPage,
  ReferenceDataPage,
  MtuAndCompaniesPage,
} from './pages';

import RequireGuest from './guards/require-guest';
import RequireAuth from './guards/require-auth';
import { DefaultLayout } from '../layouts/default-layout';
import { RootLayout } from '../layouts/root-layout';

import { ErrorBoundary } from '@shared/ui';
import { routes } from '@shared/config';

const routeFallback = <div>Loading...</div>;

const router = createBrowserRouter([
  {
    element: <RequireGuest />,
    errorElement: <ErrorBoundary><span /></ErrorBoundary>,
    hydrateFallbackElement: routeFallback,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          {
            path: routes.AUTH,
            element: <AuthPage />,
          },
          {
            path: routes.LOGIN,
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
  {
    element: <RequireAuth />,
    errorElement: <ErrorBoundary><span /></ErrorBoundary>,
    hydrateFallbackElement: routeFallback,
    children: [
      {
        element: <DefaultLayout />,
        children: [
          {
            path: routes.REGISTER,
            element: <RegisterPage />,
          },
        ],
      },
      {
        element: <RootLayout />,
        children: [
          {
            path: routes.DASHBOARD,
            element: <DashboardPage />,
          },
          {
            path: routes.APPLICATIONS,
            element: <ApplicationsPage />,
          },
          {
            path: routes.SINGLE_APPLICATION(':id'),
            element: <ApplicationPage />,
          },
          {
            path: routes.CREATE_APPLICATION(),
            element: <CreateApplicationPage />,
          },
          {
            path: routes.NOTIFICATIONS,
            element: <NotificationsPage />,
          },
          {
            path: routes.PAYMENT_HISTORY,
            element: <PaymentHistoryPage />,
          },
          {
            path: routes.TECHNICAL_SPECIFICATIONS,
            element: <TechnicalSpecificationsPage />,
          },
          {
            path: routes.COMMUNICATIONS_REGISTER,
            element: <CommunicationsRegisterPage />,
          },
          {
            path: routes.USERS,
            element: <UsersPage />,
          },
          {
            path: routes.SINGLE_USER(':id'),
            element: <UserPage />,
          },
          {
            path: routes.ROLES,
            element: <RolesPage />,
          },
          {
            path: routes.REFERENCE_DATA,
            element: <ReferenceDataPage />,
          },
          {
            path: routes.MTU_AND_COMPANIES,
            element: <MtuAndCompaniesPage />,
          },
          {
            path: routes.PROFILE,
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
