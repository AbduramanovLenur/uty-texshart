import type { FC } from 'react';
import { Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { EImzo } from '@features/e-imzo';
import { MyIdAuth, OneIdAuth } from '@features/authentication';

import styles from './auth-services.module.scss';

const AuthServices: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles['auth-services'])}>
      <EImzo />
      <Divider
        className={cn(styles['auth-services__divider'])}
        titlePlacement='center'
      >
        {t('authentication.authPanel.or')}
      </Divider>
      <div className={cn(styles['auth-services__list'])}>
        <OneIdAuth />
        <MyIdAuth />
      </div>
    </div>
  );
};

export default AuthServices;
