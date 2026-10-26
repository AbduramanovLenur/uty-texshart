import type { FC } from 'react';
import { Typography, Button } from 'antd';

import styles from './notifications.module.scss';

const { Title } = Typography;

const Notifications: FC = () => {
  return (
    <section className={styles['notifications']}>
      <div className={styles['notifications__inner']}>
        <div className={styles['notifications__top']}>
          <Title className={styles['notifications__title']} level={3}>
            Bildirishnomalar
          </Title>
          <Button
            className={styles['notifications__btn']}
            type='default'
            icon={
              <svg width='16' height='16' viewBox='0 0 16 16'>
                <use href='/images/svg/sprite.svg#icon-check' />
              </svg>
            }>
            Barchasini o‘qilgan deb belgilash
          </Button>
        </div>
        <div className={styles['notifications__content']}>
          <div className={styles['notification__wrapper']}>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
