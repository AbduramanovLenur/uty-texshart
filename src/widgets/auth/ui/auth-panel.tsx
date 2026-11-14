import { Divider, Typography } from 'antd';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { LanguageSwitcher } from '@features/language-switcher';
import { MyIdAuth, OneIdAuth } from '@features/authentication';
import { EImzo } from '@features/e-imzo';

import styles from './auth-panel.module.scss';

const { Title } = Typography;

const AuthPanel: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles['auth-panel'])}>
      <div className={cn(styles['auth-panel__top'])}>
        <div className={cn('auth-panel__logo-project')}>
          <img
            src='/images/svg/logo-primary.svg'
            alt='logo'
            loading='lazy'
            width={160}
            height={40}
          />
        </div>
        <LanguageSwitcher />
      </div>
      <div className={cn(styles['auth-panel__body'])}>
        <Title className={cn(styles['auth-panel__title'])} level={3}>
          {t('authentication.authPanel.welcome')}
        </Title>
        <Title className={cn(styles['auth-panel__subtitle'])} level={5}>
          {t('authentication.authPanel.signInPrompt')}
        </Title>

        <EImzo />
        <Divider
          className={cn(styles['auth-panel__divider'])}
          titlePlacement='center'
        >
          {t('authentication.authPanel.or')}
        </Divider>
        <div className={cn(styles['auth-panel__services'])}>
          <OneIdAuth />
          <MyIdAuth />
        </div>
      </div>
      <div className={cn(styles['auth-panel__copyright'])}>
        {t('authentication.authPanel.copyright')}
      </div>
    </div>
  );
};

export default AuthPanel;
