import type { FC } from 'react';
import { Typography } from 'antd';
import cn from 'classnames';

import DashboardStatistics from './dashboard-statistics';
import DashboardBody from './dashboard-body';

import styles from './dashboard.module.scss';

const { Title } = Typography;

const Dashboard: FC = () => {
  return (
    <section className={cn(styles['dashboard'], 'section')}>
      <div className={styles['dashboard__inner']}>
        <Title className={styles['dashboard__title']} level={3}>
          Asosiy sahifa
        </Title>
        <DashboardStatistics />
        <DashboardBody />
      </div>
    </section>
  );
};

export default Dashboard;
