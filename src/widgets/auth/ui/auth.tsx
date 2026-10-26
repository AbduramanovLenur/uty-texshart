import type { FC } from 'react';

import AuthPromo from './auth-promo';
import AuthPanel from './auth-panel';

import styles from './auth.module.scss';

const Auth: FC = () => {
  return (
    <section className={styles['auth']}>
      <div className={styles['auth__inner']}>
        <AuthPromo />
        <AuthPanel />
      </div>
    </section>
  );
};

export default Auth;
