import type { FC } from 'react';
import cn from 'classnames';

import type { IStatusCard } from '../model/types/statistics';

import styles from './status-card.module.scss';

interface IProps {
  item: IStatusCard;
}

const StatusCard: FC<IProps> = ({ item }) => {
  return (
    <div className={cn(styles['status-card'])}>
      <div className={cn(styles['status-card__icon'])}>
        {item.icon}
      </div>
      <div className={cn(styles['status-card__content'])}>
        <div className={cn(styles['status-card__title'])}>{item.title}</div>
         <div className={cn(styles['status-card__count'])}>{item.count}</div>
      </div>
    </div>
  );
};

export default StatusCard;
