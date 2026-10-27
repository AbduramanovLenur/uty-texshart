import { Typography } from 'antd';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './auth-promo.module.scss';

const { Title } = Typography;

const AuthPromo: FC = () => {
  const { t } = useTranslation();

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
            src='/images/pictures/train.png'
            alt='logo'
            loading='lazy'
            width={616}
            height={462}
          />
        </div>
        <Title level={3} className={styles['auth-promo__slogan']}>
          {t('authentication.authPromo.slogan')}
        </Title>
        <div className={styles['auth-promo__name']}>
          {t('authentication.authPromo.name')}
        </div>
      </div>
    </div>
  );
};

export default AuthPromo;
