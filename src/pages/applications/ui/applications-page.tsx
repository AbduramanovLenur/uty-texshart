import type { FC } from 'react';

import { UserApplications } from '@widgets/user-applications';
import { IncomingApplications } from '@widgets/incoming-applications';

const ApplicationsPage: FC = () => {
  const userRole = 'ADMIN';

  if (userRole) {
    return <IncomingApplications />;
  }

  return <UserApplications />;
};

export default ApplicationsPage;
