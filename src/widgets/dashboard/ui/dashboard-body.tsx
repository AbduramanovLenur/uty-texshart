import { useState, type FC } from 'react';
import cn from 'classnames';

import RecentApplications from './recent-applications';
import ApplicationDetails from './application-details';

import styles from './dashboard-body.module.scss';

const DashboardBody: FC = () => {
  const [selectedId, setSelectedId] = useState<string>('');

  const handleSelect = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div className={cn(styles['dashboard-body'])}>
      <RecentApplications activeId={selectedId} onSelect={handleSelect} />
      <ApplicationDetails id={selectedId} />
    </div>
  );
};

export default DashboardBody;
