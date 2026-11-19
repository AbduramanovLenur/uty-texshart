import { Typography } from 'antd';
import type { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { userDocuments } from '../model/mock';

import { PreviewFile } from '@features/preview-file';
import { open as openViewPdfModal } from '@features/view-pdf-modal';
import { UserInfo } from '@entities/user';

import styles from './incoming-application-applicant.module.scss';

const { Title } = Typography;

const IncomingApplicationApplicant: FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleOpenPdf = (url: string) => {
    dispatch(openViewPdfModal({ url }));
  };

  return (
    <div className={cn(styles['incoming-application-applicant'])}>
      <UserInfo />
      <div className={cn(styles['incoming-application-applicant__documents'], 'scrollbar')}>
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
            onView={() => handleOpenPdf(userDocuments.passport.url)}
          />
        </div>
        <div className={cn(styles['incoming-application-applicant__documents-overlay'])}>
          <Title className={cn(styles['incoming-application-applicant__documents-title'])} level={5}>
            {t('userDocuments.license')}
          </Title>
          <PreviewFile
            file={{
              name: t('userDocuments.license'),
              url: userDocuments.license.url,
              size: '100x100',
              extensionFile: 'PDF',
            }}
            isDownload
            isView
            onView={() => handleOpenPdf(userDocuments.license.url)}
          />
        </div>
      </div>
    </div>
  );
};

export default IncomingApplicationApplicant;
