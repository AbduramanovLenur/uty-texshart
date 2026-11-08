import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import styles from './application-info.module.scss';

interface IProps {
  className?: string;
};

const ApplicationInfo: FC<IProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles['application-info'], className)}>
      <div className={styles['application-info__wrapper']}>
        <div className={styles['application-info__item']}>
          <div className={styles['application-info__title']}>
            {t('applicationInfo.applicationNumber')}
          </div>
          <div className={styles['application-info__value']}>
            ARZ-31234123
          </div>
        </div>
        <div className={styles['application-info__item']}>
          <div className={styles['application-info__title']}>
            {t('applicationInfo.communicationType')}
          </div>
          <div className={styles['application-info__value']}>
            Havo elektr uzatish liniyasi
          </div>
        </div>
        <div className={styles['application-info__item']}>
          <div className={styles['application-info__title']}>
            {t('applicationInfo.crossingMethod')}
          </div>
          <div className={styles['application-info__value']}>
            Temir yo'l izlari ostidan
          </div>
        </div>
        <div className={styles['application-info__item']}>
          <div className={styles['application-info__title']}>
            {t('applicationInfo.technicalParameters')}
          </div>
          <ul className={styles['application-info__list']}>
            <li className={styles['application-info__item']}>
              <div className={styles['application-info__value']}>
                Kuchlanish -8 000 kV
              </div>
            </li>
            <li className={styles['application-info__item']}>
              <div className={styles['application-info__value']}>
                Izdan eng past nuqtagacha balandlik - 20 m
              </div>
            </li>
            <li className={styles['application-info__item']}>
              <div className={styles['application-info__value']}>
                Tayanchdan izning o'qigacha masofa - 140 m
              </div>
            </li>
          </ul>
        </div>
        <div className={styles['application-info__item']}>
          <div className={styles['application-info__title']}>
            {t('applicationInfo.locationPhotos')}
          </div>
          <ul className={styles['application-info__pictures']}>
            <li className={styles['application-info__picture']}>
              <div className={styles['application-info__picture-box']}>
                <img
                  src='/images/test/picture.png'
                  alt='picture'
                  loading='lazy'
                  width={129}
                  height={74}
                />
              </div>
            </li>
            <li className={styles['application-info__picture']}>
              <div className={styles['application-info__picture-box']}>
                <img
                  src='/images/test/picture.png'
                  alt='picture'
                  loading='lazy'
                  width={129}
                  height={74}
                />
              </div>
            </li>
            <li className={styles['application-info__picture']}>
              <div className={styles['application-info__picture-box']}>
                <img
                  src='/images/test/picture.png'
                  alt='picture'
                  loading='lazy'
                  width={129}
                  height={74}
                />
              </div>
            </li>
          </ul>
        </div>
        <div className={styles['application-info__item']}>
          <div className={styles['application-info__title']}>
            {t('applicationInfo.projectGoal')}
          </div>
          <div className={styles['application-info__value']}>
            Elektr ta’minotini yaxshilash
          </div>
        </div>
        <div className={styles['application-info__item']}>
          <div className={styles['application-info__title']}>
            {t('applicationInfo.comment')}
          </div>
          <div className={styles['application-info__value']}>
            Yangi zavod qurilmoqda
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationInfo;
