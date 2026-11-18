import type { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Application } from '@widgets/application';
import { IncomingApplication } from '@widgets/incoming-application';

const ApplicationPage: FC = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role');
  const isAdmin =
    role?.toLowerCase() === 'admin' ||
    (searchParams.has('admin') && searchParams.get('admin') !== 'false');

  if (isAdmin) {
    return <IncomingApplication />;
  }

  return <Application />;
};

export default ApplicationPage;
