import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './my-id-auth.module.scss';

const MyIdAuth: FC = () => {
  const { t } = useTranslation();

  return (
    <a className={styles['my-id-auth']} href='#'>
      <span>
        <img
          src='/images/pictures/my-id.png'
          alt='one-id'
          loading='lazy'
          width={87}
          height={24}
        />
      </span>
      <span>
        {t('authentication.myId.signIn')}
      </span>
    </a>
  );
};

export default MyIdAuth;
