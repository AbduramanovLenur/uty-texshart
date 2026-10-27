import type { FC } from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { NotificationCard } from '@entities/notifications';
import { routes } from '@shared/config';

import styles from './notification-popover.module.scss';

const { Title } = Typography;

const NotificationPopover: FC = () => {
  const { t } = useTranslation();

  const notifications = [
    {
      id: 1,
      label: 'Texnik-shart berildi',
      description: 'Suv quvuri uchun texnik-shart tayyor.',
      record: 'ARZ-1345',
      timestamp: 'Bugun, 10:45',
    },
    {
      id: 2,
      label: 'Ma’lumotlarni to‘ldirish talab etiladi',
      description: 'Arizaga kesishuv sxemasini ilova qiling.',
      record: 'ARZ-0923',
      timestamp: 'Bugun, 09:30',
    },
  ];
  const newCount = notifications.length;

  return (
    <div className={styles['notification-popover']}>
      <div className={styles['notification-popover__header']}>
        <Title className={styles['notification-popover__title']} level={5}>
          {t('notifications.popover.title')}
        </Title>
        <div className={styles['notification-popover__count-records']}>
          {t('notifications.popover.newCount', { count: newCount })}
        </div>
      </div>
      <div className={styles['notification-popover__body']}>
        <ul className={styles['notification-popover__list']}>
          {notifications.map((item) => (
            <li className={styles['notification-popover__item']} key={item.id}>
              <NotificationCard item={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles['notification-popover__bottom']}>
        <Link
          to={routes.NOTIFICATIONS}
          className={styles['notification-popover__link']}
        >
          {t('notifications.popover.viewAll')}
        </Link>
      </div>
    </div>
  );
};

export default NotificationPopover;
