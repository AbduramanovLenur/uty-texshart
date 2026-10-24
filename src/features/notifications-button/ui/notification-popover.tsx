import type { FC } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

import { routes } from '@shared/config';

import styles from './notification-popover.module.scss';

const { Title } = Typography;

const NotificationPopover: FC = () => {
  return (
    <div className={styles['notification-popover']}>
      <div className={styles['notification-popover__header']}>
        <Title className={styles['notification-popover__title']} level={5}>
          Bildirishnomalar
        </Title>
        <div className={styles['notification-popover__count-records']}>
          3 ta yangi
        </div>
      </div>
      <div className={styles['notification-popover__body']}>
        <ul className={styles['notification-popover__list']}>
          <li className={styles['notification-popover__item']}>
            <div className={styles['notification-popover__box']}>
              <div className={styles['notification-popover__wrapper']}>
                <div className={styles['notification-popover__label']}>
                  Texnik-shart berildi
                </div>
                <div className={styles['notification-popover__circle']}></div>
              </div>
              <div className={styles['notification-popover__description']}>
                Suv quvuri uchun texnik-shart tayyor.
              </div>
              <div className={styles['notification-popover__inner']}>
                <Link
                  to={routes.NOTIFICATIONS}
                  className={styles['notification-popover__record']}
                >
                  ARZ-1345
                </Link>
                <div className={styles['notification-popover__decor']}></div>
                <div className={styles['notification-popover__timestamp']}>
                  Bugun, 10:45
                </div>
              </div>
            </div>
          </li>
          <li className={styles['notification-popover__item']}>
            <div className={styles['notification-popover__box']}>
              <div className={styles['notification-popover__wrapper']}>
                <div className={styles['notification-popover__label']}>
                  Ma’lumotlarni to‘ldirish talab etiladi
                </div>
                <div className={styles['notification-popover__circle']}></div>
              </div>
              <div className={styles['notification-popover__description']}>
                Arizaga kesishuv sxemasini ilova qiling.
              </div>
              <div className={styles['notification-popover__inner']}>
                <Link
                  to={routes.NOTIFICATIONS}
                  className={styles['notification-popover__record']}
                >
                  ARZ-0923
                </Link>
                <div className={styles['notification-popover__decor']}></div>
                <div className={styles['notification-popover__timestamp']}>
                  Bugun, 09:30
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles['notification-popover__bottom']}>
        <Link
          to={routes.NOTIFICATIONS}
          className={styles['notification-popover__link']}
        >
          Barchasini ko‘rish
        </Link>
      </div>
    </div>
  );
};

export default NotificationPopover;
