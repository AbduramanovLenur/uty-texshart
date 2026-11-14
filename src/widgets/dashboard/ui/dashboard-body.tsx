import type { FC } from 'react';
import cn from 'classnames';

import RecentApplications from './recent-applications';
import ApplicationDetails from './application-details';

import styles from './dashboard-body.module.scss';

const DashboardBody: FC = () => {
  return (
    <div className={cn(styles['dashboard-body'])}>
      <RecentApplications />
      <ApplicationDetails />
    </div>
  );
};

export default DashboardBody;
