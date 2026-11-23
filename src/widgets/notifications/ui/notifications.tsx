import type { FC } from 'react';
import { Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { notifications } from '../model/mock';

import { NotificationItem } from '@entities/notification';
import { IconCheck } from '@shared/assets';

import styles from './notifications.module.scss';

const { Title } = Typography;

const Notifications: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={cn('section')}>
      <div className={cn('section-inner')}>
        <div className={cn('section-top')}>
          <Title className={cn('section-title')} level={3}>
            {t('notifications.page.title')}
          </Title>
          <Button
            type='default'
            icon={<IconCheck />}
          >
            {t('notifications.page.markAllRead')}
          </Button>
        </div>
        <div className={cn(styles['notifications__content'])}>
          <ul>
            {notifications.map((notification) => (
              <li key={notification.date}>
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
