import type { FC } from 'react';

import { Application } from '@widgets/application';
import { IncomingApplication } from '@widgets/incoming-application';

const ApplicationPage: FC = () => {
  const userRole = 'ADMIN';

  // if (userRole) {
  //   return <IncomingApplication />;
  // }

  return <Application />;
};

export default ApplicationPage;
