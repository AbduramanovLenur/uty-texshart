import { createBrowserRouter } from 'react-router-dom';

import {
  AuthPage,
  ApplicationsPage,
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
        element: <RootLayout />,
        children: [
          {
            path: routes.APPLICATIONS,
            element: <ApplicationsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
