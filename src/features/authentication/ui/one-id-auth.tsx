import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './one-id-auth.module.scss';

const OneIdAuth: FC = () => {
  const { t } = useTranslation();

  return (
    <a className={styles['one-id-auth']} href='#'>
      <span>
        <img
          src='/images/pictures/one-id.png'
          alt='one-id'
          loading='lazy'
          width={24}
          height={24}
        />
      </span>
      <span>
        {t('authentication.oneId.signIn')}
      </span>
    </a>
  );
};

export default OneIdAuth;
