import type { FC } from 'react';
import { Button, Image, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import type { IUserDocuments } from '../model/types/user';

import { IconArrowDownBracket } from '@shared/assets';
import { downloadFile } from '@shared/utils';

import styles from './user-documents.module.scss';

const { Title } = Typography;

interface IProps {
  documents: IUserDocuments;
  className?: string;
};

const UserDocuments: FC<IProps> = ({ documents, className }) => {
  const { t } = useTranslation();
  const handleDownload = (url: string, name: string) => {
    if (!url || !name) return;

    downloadFile(url, name);
  };

  return (
    <div className={cn(styles['user-documents'], className)}>
      {documents?.passport && (
        <div className={cn(styles['user-documents__content'])}>
          <div className={cn(styles['user-documents__top'])}>
            <Title className={cn(styles['user-documents__title'])} level={5}>
              {t('userDocuments.idCard')}
            </Title>
            {documents?.passport?.url && (
              <Button
                className={cn(styles['user-documents__file-btn'])}
                icon={<IconArrowDownBracket />}
                onClick={() => handleDownload(documents.passport.url, 'passport')}
              >
                {t('actions.downloadFile')} ({documents.passport.size})
              </Button>
            )}
          </div>
          {documents?.passport?.previews && (
            <ul className={cn(styles['user-documents__list'])}>
              {documents.passport.previews.map((preview) => (
                <li key={preview.id} className={cn(styles['user-documents__item'])}>
                  <Image
                    src={preview.url}
                    alt={t('userDocuments.idCard')}
                    loading='lazy'
                    height={145}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <div className={cn(styles['user-documents__content'])}>
        <div className={cn(styles['user-documents__top'])}>
          <Title className={cn(styles['user-documents__title'])} level={5}>
            {t('userDocuments.license')}
          </Title>
          {documents?.license?.url && (
            <Button
              className={cn(styles['user-documents__file-btn'])}
              icon={<IconArrowDownBracket />}
              onClick={() => handleDownload(documents.license.url, 'passport')}
            >
              {t('actions.downloadFile')} ({documents.license.size})
            </Button>
          )}
        </div>
       {documents?.license?.preview && (
         <div className={cn(styles['user-documents__preview'])}>
            <Image
              src={documents.license.preview}
              alt={t('userDocuments.license')}
              loading='lazy'
              height={350}
            />
          </div>
       )}
      </div>
    </div>
  );
};

export default UserDocuments;
