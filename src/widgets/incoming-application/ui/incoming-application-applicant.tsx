import type { FC } from 'react';
import cn from 'classnames';

import { userDocuments } from '../model/mock';

import { UserDocuments, UserInfo } from '@entities/user';

import styles from './incoming-application-applicant.module.scss';

const IncomingApplicationApplicant: FC = () => {
  return (
    <div className={cn(styles['incoming-application-applicant'])}>
      <UserInfo className={cn(styles['incoming-application-applicant__content'])} />
      <UserDocuments
        className={cn(styles['incoming-application-applicant__content'])}
        documents={userDocuments}
      />
    </div>
  );
};

export default IncomingApplicationApplicant;
