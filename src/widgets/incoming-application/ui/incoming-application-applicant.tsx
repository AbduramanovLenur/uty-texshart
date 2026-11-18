import { Typography } from 'antd';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { userDocuments } from '../model/mock';

import { PreviewFile } from '@features/preview-file';
import { UserInfo } from '@entities/user';

import styles from './incoming-application-applicant.module.scss';

const { Title } = Typography;

const IncomingApplicationApplicant: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles['incoming-application-applicant'])}>
      <UserInfo />
      <div className={cn(styles['incoming-application-applicant__documents'])}>
        <div className={cn(styles['incoming-application-applicant__documents-overlay'])}>
          <Title className={cn(styles['incoming-application-applicant__documents-title'])} level={5}>
            {t('userDocuments.idCard')}
          </Title>
          <PreviewFile
            file={{
              name: t('userDocuments.idCard'),
              url: userDocuments.passport.url,
              size: '100x100',
              extensionFile: 'PDF',
            }}
            isDownload
            isView
          />
        </div>
        <div className={cn(styles['incoming-application-applicant__documents-overlay'])}>
          <Title className={cn(styles['incoming-application-applicant__documents-title'])} level={5}>
            {t('userDocuments.license')}
          </Title>
          <PreviewFile
            file={{
              name: t('userDocuments.license'),
              url: userDocuments.passport.url,
              size: '100x100',
              extensionFile: 'PDF',
            }}
            isDownload
            isView
          />
        </div>
      </div>
    </div>
  );
};

export default IncomingApplicationApplicant;
