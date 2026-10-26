import type { FC } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import type { INotificationGroup } from '../model/types';

import { routes } from '@shared/config';

import styles from './notification-item.module.scss';

const { Title } = Typography;

interface IProps {
  item: INotificationGroup;
}

const NotificationItem: FC<IProps> = ({ item }) => {
  return (
    <div className={styles['notification-item']}>
      <div className={styles['notification-item__date']}>
        {item.date}
      </div>
      <ul className={styles['notification-item__collections']}>
        {item.items.map((collection) => (
          <li key={collection.applicationId} className={styles['notification-item__collection']}>
            <div className={
              cn(
                styles['notification-item__collection-box'],
                { [styles['is-read']]: collection.read },
              )
            }>
              <div className={styles['notification-item__collection-content']}>
                <div className={styles['notification-item__collection-top']}>
                  <Title className={styles['notification-item__collection-title']} level={5}>
                    {collection.title}
                  </Title>
                  {collection.read && <div className={styles['notification-item__collection-circle']}></div>}
                </div>
                <div className={styles['notification-item__collection-description']}>
                  {collection.description}
                </div>
                <div className={styles['notification-item__collection-bottom']}>
                  <Link to={routes.NOTIFICATIONS} className={styles['notification-item__collection-link']}>
                    {collection.applicationId}
                  </Link>
                  <div className={styles['notification-item__collection-decor']}></div>
                  <div className={styles['notification-item__collection-info']}>
                    {collection.route}
                  </div>
                </div>
              </div>
              <div className={styles['notification-item__collection-information']}>
                <div className={styles['notification-item__collection-information-timestamp']}>
                  {collection.time}
                </div>
                <div className={
                  cn(
                    styles['notification-item__collection-information-status'],
                    { [styles['is-read']]: collection.read },
                  )
                }>
                  {collection.read ? 'O‘qilmagan' : 'O‘qilgan'}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationItem;
