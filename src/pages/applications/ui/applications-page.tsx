import type { FC } from 'react';

import { Applications } from '@widgets/applications';
import { IncomingApplications } from '@widgets/incoming-applications';

const ApplicationsPage: FC = () => {
  const userRole = 'ADMIN';

  if (userRole) {
    return <IncomingApplications />;
  }

  return <Applications />;
};

export default ApplicationsPage;
