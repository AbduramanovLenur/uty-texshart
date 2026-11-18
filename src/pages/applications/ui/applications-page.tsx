import type { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Applications } from '@widgets/applications';
import { IncomingApplications } from '@widgets/incoming-applications';

const ApplicationsPage: FC = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role');
  const isAdmin =
    role?.toLowerCase() === 'admin' ||
    (searchParams.has('admin') && searchParams.get('admin') !== 'false');

  if (isAdmin) {
    return <IncomingApplications />;
  }

  return <Applications />;
};

export default ApplicationsPage;
