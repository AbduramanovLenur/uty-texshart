import { createBrowserRouter } from 'react-router-dom';

import RequireGuest from './guards/require-guest';
import RequireAuth from './guards/require-auth';

import { ErrorBoundary } from '@shared/ui';

const router = createBrowserRouter([
    {
        element: <RequireGuest />,
        errorElement: <ErrorBoundary />,
        children: [],
    },
    {
        element: <RequireAuth />,
        errorElement: <ErrorBoundary />,
        children: [],
    },
]);

export default router;
