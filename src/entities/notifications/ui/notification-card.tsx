import type { FC } from 'react';
import { Link } from 'react-router-dom';

import type { INotificationCard } from '../model/types';

import { routes } from '@shared/config';

import styles from './notification-card.module.scss';

interface IProps {
  item: INotificationCard;
}

const NotificationCard: FC<IProps> = ({ item }) => {
  return (
    <div className={styles['notification-card']}>
      <div className={styles['notification-card__wrapper']}>
        <div className={styles['notification-card__label']}>
          { item.label }
        </div>
        <div className={styles['notification-card__circle']}></div>
      </div>
      <div className={styles['notification-card__description']}>
        { item.description }
      </div>
      <div className={styles['notification-card__inner']}>
        <Link
          to={routes.NOTIFICATIONS}
          className={styles['notification-card__record']}
        >
          { item.record }
        </Link>
        <div className={styles['notification-card__decor']}></div>
        <div className={styles['notification-card__timestamp']}>
          { item.timestamp }
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
