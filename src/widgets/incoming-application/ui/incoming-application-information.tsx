import type { FC } from 'react';
import cn from 'classnames';

import { ApplicationInfo, ApplicationsTimeline } from '@/entities/application';

import styles from './incoming-application-information.module.scss';

const ApplicationInformation: FC = () => {
  return (
    <div className={cn(styles['incoming-application-information'])}>
      <ApplicationInfo className={cn(styles['incoming-application-information__content'])} />
      <ApplicationsTimeline className={cn(styles['incoming-application-information__content'])} />
    </div>
  );
};

export default ApplicationInformation;
