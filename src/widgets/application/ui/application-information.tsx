import type { FC } from 'react';

import { ApplicationInfo, ApplicationsTimeline } from '@entities/applications';

import styles from './application-information.module.scss';

const ApplicationInformation: FC = () => {
  return (
    <div className={styles['application-information']}>
      <ApplicationInfo className={styles['application-information__content']} />
      <ApplicationsTimeline className={styles['application-information__content']} />
    </div>
  );
};

export default ApplicationInformation;
