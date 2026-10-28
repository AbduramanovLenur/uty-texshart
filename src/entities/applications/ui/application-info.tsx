import type { FC } from 'react';

import styles from './application-info.module.scss';

const ApplicationInfo: FC = () => {
  return (
    <div className={styles['application-info']}>
      <div className={styles['application-info__wrapper']}>
        <div className={styles['application-info__item']}>
          <div className={styles['application-info__title']}>
            Ariza raqami
          </div>
          <div className={styles['application-info__value']}>
            ARZ-31234123
          </div>
        </div>
        <div className={styles['application-info__item']}>
          <div className={styles['application-info__title']}>
            O’tkazilishi rejalashtirilayotgan kommunikatsiya turi
          </div>
          <div className={styles['application-info__value']}>
            Havo elektr uzatish liniyasi
          </div>
        </div>
        <div className={styles['application-info__item']}>
          <div className={styles['application-info__title']}>
            O'tkazish usuli
          </div>
          <div className={styles['application-info__value']}>
            Temir yo'l izlari ostidan
          </div>
        </div>
        <div className={styles['application-info__item']}>
          <div className={styles['application-info__title']}>
            Muhandislik-texnik parametrlari
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
            Kommunikatsiya o’tqazilishi rejalashtirilayotgan joy rasmi
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
            Loyihaning maqsadi
          </div>
          <div className={styles['application-info__value']}>
            Elektr ta’minotini yaxshilash
          </div>
        </div>
        <div className={styles['application-info__item']}>
          <div className={styles['application-info__title']}>
            Izoh
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
