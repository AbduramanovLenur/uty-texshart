import type { FC } from 'react';
import { Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { NotificationItem } from '@entities/notifications';
import { IconCheck } from '@shared/assets';

import styles from './notifications.module.scss';

const { Title } = Typography;

const Notifications: FC = () => {
  const { t } = useTranslation();

  const notifications = [
    {
      date: 'Bugun, 22-oktabr',
      items: [
        {
          title: 'Texnik-shart berildi',
          description:
              'Suv quvuri o‘tkazishga oid texnik-shart tayyor. Hujjatni ariza sahifasidan yuklab olishingiz mumkin.',
          applicationId: 'ARZ-1345',
          route: 'Keles — Chuqursoy',
          time: 'Bugun, 10:45',
          read: false,
        },
        {
          title: 'Hududiy bo‘limga yo‘naltirildi',
          description:
              'Kanalizatsiya o‘tkazish bo‘yicha arizangiz hududiy bo‘limga yuborildi.',
          applicationId: 'ARZ-0923',
          route: 'Jomiy — Pushkin',
          time: 'Bugun, 09:30',
          read: false,
        },
        {
          title: 'Dalolatnoma tuzildi',
          description:
              'Yer osti elektr kabeli kesishuviga oid so‘rov joyida o‘rganish yakunlandi. Dalolatnoma arizaga biriktirildi.',
          applicationId: 'ARZ-0142',
          route: 'Keles — Chuqursoy',
          time: 'Bugun, 08:15',
          read: false,
        },
      ],
    },
    {
      date: '20.10.202',
      items: [
        {
          title: 'Dalolatnoma tuzildi',
          description:
              'Gaz quvuri kesishuvini joyida o‘rganish yakunlandi. Dalolatnoma arizaga biriktirildi.',
          applicationId: 'ARZ-0587',
          route: 'Keles — Chuqursoy',
          time: '16:40',
          read: true,
        },
        {
          title: 'Arizangiz yo‘naltirildi',
          description:
              'Havo elektr uzatish liniyasi bo‘yicha arizangiz hududiy bo‘limga yuborildi.',
          applicationId: 'ARZ-0923',
          route: 'Jomiy — Pushkin',
          time: '14:20',
          read: true,
        },
        {
          title: 'Qurilish ishlari boshlandi',
          description:
              'Neft quvuri o‘tkazishga oid qurilish ishlari boshlanganligi qayd etildi.',
          applicationId: 'ARZ-0546',
          route: 'Jomiy — Pushkin',
          time: '11:00',
          read: true,
        },
      ],
    },
  ];

  return (
    <section className={styles['notifications']}>
      <div className={styles['notifications__inner']}>
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
