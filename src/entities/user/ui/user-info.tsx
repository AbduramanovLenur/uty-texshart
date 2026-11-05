import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import cn from 'classnames';

import { userMock } from '../model/mock';
import type { IUser } from '../model/types';

import { IconArrowDownBracket } from '@shared/assets';

import styles from './user-info.module.scss';

interface IProps {
  user?: IUser | null;
  className?: string;
}

const UserInfo: FC<IProps> = ({ user, className }) => {
  const { t } = useTranslation();
  const data = user ?? userMock;

  const handleDownload = (url?: string, filename?: string) => {
    if (!url || url === '#') {
      return;
    }
    const link = document.createElement('a');
    link.href = url;
    link.download = filename || 'download';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={cn(styles['user-info'], className)}>
      <div className={styles['user-info__content']}>
        <div className={styles['user-info__top']}>
          <div className={styles['user-info__details']}>
            <div className={styles['user-info__item']}>
              <div className={styles['user-info__label']}>
                {t('userInfo.name', t('headers.user'))}
              </div>
              <div className={styles['user-info__value']}>{data.name}</div>
            </div>
            <div className={styles['user-info__item']}>
              <div className={styles['user-info__label']}>
                {t('userInfo.inn')}
              </div>
              <div className={styles['user-info__value']}>{data.inn}</div>
            </div>
            <div className={styles['user-info__item']}>
              <div className={styles['user-info__label']}>
                {t('userInfo.director')}
              </div>
              <div className={styles['user-info__value']}>{data.director}</div>
            </div>
            <div className={styles['user-info__item']}>
              <div className={styles['user-info__label']}>
                {t('userInfo.phone')}
              </div>
              <div className={styles['user-info__value']}>{data.phone}</div>
            </div>
          </div>
          {data.avatar && (
            <div className={styles['user-info__avatar']}>
              <img
                src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwAgrLeCJI0TlSJUlvdwYONouSV84XprSmHGB5cUwvLuawZEtQxmIal4&s=10'}
                alt={data.name}
                loading='lazy'
                width={86}
                height={86}
              />
            </div>
          )}
        </div>

        <div className={styles['user-info__item']}>
          <div className={styles['user-info__label']}>
            {t('userInfo.address')}
          </div>
          <div className={styles['user-info__value']}>{data.address}</div>
        </div>

        {data.idCard && (
          <div className={styles['user-info__item']}>
            <div className={styles['user-info__label']}>
              {t('userInfo.idCard')}
            </div>
            <Button
              className={styles['user-info__file-btn']}
              icon={<IconArrowDownBracket />}
              onClick={() => handleDownload(data.idCard?.url, data.idCard?.name)}
            >
              {t('actions.downloadFile')} ({data.idCard.size})
            </Button>
          </div>
        )}

        {data.license && (
          <div className={styles['user-info__item']}>
            <div className={styles['user-info__label']}>
              {t('userInfo.license')}
            </div>
            <Button
              className={styles['user-info__file-btn']}
              icon={<IconArrowDownBracket />}
              onClick={() => handleDownload(data.license?.url, data.license?.name)}
            >
              {t('actions.downloadFile')} ({data.license.size})
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;
