import type { FC } from 'react';

import ApplicationDetails from './application-details';
import RecentApplications from './recent-applications';

import styles from './dashboard-body.module.scss';

const DashboardBody: FC = () => {
  return (
     <div className={styles['dashboard-body']}>
      <RecentApplications />
      <ApplicationDetails />
    </div>
  );
};

export default DashboardBody;
