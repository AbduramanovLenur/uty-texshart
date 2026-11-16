import type { FC } from 'react';
import cn from 'classnames';

import AuthPromo from './auth-promo';
import AuthPanel from './auth-panel';
import type { TAuthType } from '../model/types';

import styles from './auth.module.scss';

interface IProps {
  type: TAuthType;
}

const Auth: FC<IProps> = ({ type }) => {
  return (
    <section className={cn(styles['auth'])}>
      <div className={cn(styles['auth__inner'])}>
        <AuthPromo />
        <AuthPanel type={type} />
      </div>
    </section>
  );
};

export default Auth;
