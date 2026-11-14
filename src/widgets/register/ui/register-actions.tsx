import type { FC } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import styles from './register-actions.module.scss';

interface IRegisterActionsProps {
  onBack: () => void;
}

const RegisterActions: FC<IRegisterActionsProps> = ({ onBack }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles['register-actions'])}>
      <Button
        className={cn(styles['register-actions__button'])}
        type='default'
        size='large'
        onClick={onBack}
      >
        {t('register.actions.back')}
      </Button>
      <Button
        className={cn(styles['register-actions__button'])}
        type='primary'
        size='large'
        htmlType='submit'
      >
        {t('register.actions.continue')}
      </Button>
    </div>
  );
};

export default RegisterActions;
