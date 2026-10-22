import { Divider, Typography } from 'antd';
import type { FC } from 'react';

import { LanguageSwitcher } from '@features/language-switcher';
import { EImzoAuth, MyIdAuth, OneIdAuth } from '@features/authentication';

import styles from './auth-panel.module.scss';

const { Title } = Typography;

const AuthPanel: FC = () => {
  return (
    <div className={styles['auth-panel']}>
      <div className={styles['auth-panel__top']}>
        <div className='auth-panel__logo-project'>
          <img
            src='/images/svg/logo-project.svg'
            alt='logo'
            loading='lazy'
            width={200}
            height={50}
          />
        </div>
        <LanguageSwitcher />
      </div>
      <div className={styles['auth-panel__body']}>
        <Title className={styles['auth-panel__title']} level={3}>
          Xush kelibsiz
        </Title>
        <Title className={styles['auth-panel__subtitle']} level={5}>
          Ishni boshlash uchun tizimga kiring
        </Title>

        <EImzoAuth />
        <Divider
          className={styles['auth-panel__divider']}
          titlePlacement='center'
        >
          Yoki
        </Divider>
        <div className={styles['auth-panel__services']}>
          <OneIdAuth />
          <MyIdAuth />
        </div>
      </div>
      <div className={styles['auth-panel__copyright']}>
        © 2026 O’zbekiston Temir Yo‘llari Tex-Shart
      </div>
    </div>
  );
};

export default AuthPanel;
