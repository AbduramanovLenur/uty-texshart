import type { FC } from 'react';
import { Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { notifications } from '../model/mock';

import { NotificationItem } from '@/entities/notification';
import { IconCheck } from '@shared/assets';

import styles from './notifications.module.scss';

const { Title } = Typography;

const Notifications: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={cn(styles['notifications'], 'section')}>
      <div className={cn(styles['notifications__inner'], 'section-inner')}>
        <div className={styles['notifications__top']}>
          <Title className={styles['notifications__title']} level={3}>
            {t('notifications.page.title')}
          </Title>
          <Button
            className={styles['notifications__btn']}
            type='default'
            icon={<IconCheck />}
          >
            {t('notifications.page.markAllRead')}
          </Button>
        </div>
        <div className={styles['notifications__content']}>
          <ul className={styles['notifications__list']}>
            {notifications.map((notification) => (
              <li key={notification.date} className={styles['notifications__item']}>
                <NotificationItem item={notification} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
