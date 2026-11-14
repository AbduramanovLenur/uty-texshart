import type { FC } from 'react';
import cn from 'classnames';

import { ApplicationInfo, ApplicationsTimeline } from '@/entities/application';

import styles from './application-information.module.scss';

const ApplicationInformation: FC = () => {
  return (
    <div className={cn(styles['application-information'])}>
      <ApplicationInfo className={cn(styles['application-information__content'])} />
      <ApplicationsTimeline className={cn(styles['application-information__content'])} />
    </div>
  );
};

export default ApplicationInformation;
