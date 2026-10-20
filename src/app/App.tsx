import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

import { AppProvider } from './providers';
import { router } from './routes';

import { ErrorBoundary } from '@shared/ui';

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense
        fallback={
          <div>Loading...</div>
        }
      >
        <AppProvider>
          <RouterProvider router={router} />
        </AppProvider>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
