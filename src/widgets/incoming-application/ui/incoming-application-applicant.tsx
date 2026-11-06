import type { FC } from 'react';

import { userDocuments } from '../model/mock';

import { UserDocuments, UserInfo } from '@entities/user';

import styles from './incoming-application-applicant.module.scss';

const IncomingApplicationApplicant: FC = () => {
  return (
    <div className={styles['incoming-application-applicant']}>
      <UserInfo className={styles['incoming-application-applicant__content']} />
      <UserDocuments
        className={styles['incoming-application-applicant__content']}
        documents={userDocuments}
      />
    </div>
  );
};

export default IncomingApplicationApplicant;
