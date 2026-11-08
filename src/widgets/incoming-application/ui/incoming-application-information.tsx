import type { FC } from 'react';

import { ApplicationInfo, ApplicationsTimeline } from '@/entities/application';

import styles from './incoming-application-information.module.scss';

const ApplicationInformation: FC = () => {
  return (
    <div className={styles['incoming-application-information']}>
      <ApplicationInfo className={styles['incoming-application-information__content']} />
      <ApplicationsTimeline className={styles['incoming-application-information__content']} />
    </div>
  );
};

export default ApplicationInformation;
