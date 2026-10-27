import { Divider, Typography } from 'antd';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageSwitcher } from '@features/language-switcher';
import { EImzoAuth, MyIdAuth, OneIdAuth } from '@features/authentication';

import styles from './auth-panel.module.scss';

const { Title } = Typography;

const AuthPanel: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['auth-panel']}>
      <div className={styles['auth-panel__top']}>
        <div className='auth-panel__logo-project'>
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
      <div className={styles['auth-panel__body']}>
        <Title className={styles['auth-panel__title']} level={3}>
          {t('authentication.authPanel.welcome')}
        </Title>
        <Title className={styles['auth-panel__subtitle']} level={5}>
          {t('authentication.authPanel.signInPrompt')}
        </Title>

        <EImzoAuth />
        <Divider
          className={styles['auth-panel__divider']}
          titlePlacement='center'
        >
          {t('authentication.authPanel.or')}
        </Divider>
        <div className={styles['auth-panel__services']}>
          <OneIdAuth />
          <MyIdAuth />
        </div>
      </div>
      <div className={styles['auth-panel__copyright']}>
        {t('authentication.authPanel.copyright')}
      </div>
    </div>
  );
};

export default AuthPanel;
