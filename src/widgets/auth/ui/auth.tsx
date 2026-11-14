import type { FC } from 'react';
import cn from 'classnames';

import AuthPromo from './auth-promo';
import AuthPanel from './auth-panel';

import styles from './auth.module.scss';

const Auth: FC = () => {
  return (
    <section className={cn(styles['auth'])}>
      <div className={cn(styles['auth__inner'])}>
        <AuthPromo />
        <AuthPanel />
      </div>
    </section>
  );
};

export default Auth;
