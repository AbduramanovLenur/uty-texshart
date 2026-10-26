import { type FC } from 'react';

import styles from './my-id-auth.module.scss';

const MyIdAuth: FC = () => {
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
        My ID orqali
      </span>
    </a>
  );
};

export default MyIdAuth;
