import type { FC } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

import styles from './register-actions.module.scss';

interface IRegisterActionsProps {
  onBack: () => void;
}

const RegisterActions: FC<IRegisterActionsProps> = ({ onBack }) => {
  const { t } = useTranslation();

  return (
    <div className={styles['register-actions']}>
      <Button
        className={styles['register-actions__button']}
        type='default'
        onClick={onBack}
      >
        {t('register.actions.back')}
      </Button>
      <Button
        className={styles['register-actions__button']}
        type='primary'
        htmlType='submit'
      >
        {t('register.actions.continue')}
      </Button>
    </div>
  );
};

export default RegisterActions;
