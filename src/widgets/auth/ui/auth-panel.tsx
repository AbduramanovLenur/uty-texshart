import type { FC, ReactNode } from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { LanguageSwitcher } from '@features/language-switcher';
import AuthServices from './auth-services';
import AuthCredentials from './auth-credentials';
import { AuthTypes } from '../model/constants/auth-types';
import type { TAuthType } from '../model/types';

import styles from './auth-panel.module.scss';

const { Title } = Typography;

interface IProps {
  type: TAuthType;
}

const AuthPanel: FC<IProps> = ({ type }) => {
  const { t } = useTranslation();

  const contentByType: Record<TAuthType, ReactNode> = {
    [AuthTypes.SERVICES]: <AuthServices />,
    [AuthTypes.CREDENTIALS]: <AuthCredentials />,
  };

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

        {contentByType[type]}
      </div>
      <div className={cn(styles['auth-panel__copyright'])}>
        {t('authentication.authPanel.copyright')}
      </div>
    </div>
  );
};

export default AuthPanel;
