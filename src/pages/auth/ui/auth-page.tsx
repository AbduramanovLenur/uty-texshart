import type { FC } from 'react';

import { AuthPromo } from '@widgets/auth-promo';
import { AuthPanel } from '@widgets/auth-panel';

import styles from './auth-page.module.scss';

const AuthPage: FC = () => {
  return (
    <section className={styles['auth']}>
      <div className={styles['auth__inner']}>
        <AuthPromo />
        <AuthPanel />
      </div>
    </section>
  );
};

export default AuthPage;
