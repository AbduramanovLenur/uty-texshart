import { type FC } from 'react';

import styles from './one-id-auth.module.scss';

const OneIdAuth: FC = () => {
  return (
    <a className={styles['one-id-auth']} href='#'>
      <span>
        <img
          src='/images/icons/one-id.png'
          alt='one-id'
          loading='lazy'
          width={24}
          height={24}
        />
      </span>
      <span>
        One ID orqali
      </span>
    </a>
  );
};

export default OneIdAuth;
