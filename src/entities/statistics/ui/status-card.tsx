import type { FC } from 'react';

import type { IStatusCard } from '../model/types';

import styles from './status-card.module.scss';

interface IProps {
  item: IStatusCard;
}

const StatusCard: FC<IProps> = ({ item }) => {
  return (
    <div className={styles['status-card']}>
      <div className={styles['status-card__icon']}>
        {item.icon}
      </div>
      <div className={styles['status-card__content']}>
        <div className={styles['status-card__title']}>{item.title}</div>
         <div className={styles['status-card__count']}>{item.count}</div>
      </div>
    </div>
  );
};

export default StatusCard;
