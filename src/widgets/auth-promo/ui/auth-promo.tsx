import { Typography } from 'antd';
import type { FC } from 'react';

import styles from './auth-promo.module.scss';

const { Title } = Typography;

const AuthPromo: FC = () => {
  return (
    <div className={styles['auth-promo']}>
      <div className={styles['auth-promo__logo']}>
        <img
          src='/images/svg/logo.svg'
          alt='logo'
          loading='lazy'
          width={180}
          height={74}
        />
      </div>
      <div className={styles['auth-promo__wrapper']}>
        <div className={styles['auth-promo__decor']}>
          <img
            src='/images/svg/train.svg'
            alt='logo'
            loading='lazy'
            width={468}
            height={468}
          />
        </div>
        <Title level={3} className={styles['auth-promo__slogan']}>
          Barcha jarayonlar — bir joyda
        </Title>
        <div className={styles['auth-promo__name']}>
          O’zbekiston Temir Yo‘llari Tex-Shart boshqaruv tizimi
        </div>
      </div>
    </div>
  );
};

export default AuthPromo;
