import type { FC } from 'react';
import { Form, Input } from 'antd';
import { useTranslation } from 'react-i18next';

import { FormFields } from '../model/constants/form-fields';

import RegisterActions from './register-actions';
import styles from './register-sms-step.module.scss';

const { Item } = Form;

interface IRegisterSmsStepProps {
  isActive: boolean;
  onBack: () => void;
}

const RegisterSmsStep: FC<IRegisterSmsStepProps> = ({
  isActive,
  onBack,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles['register-sms-step']}>
      <Item
        label={t('register.sms.codeLabel')}
        name={FormFields.SMS_CODE}
        rules={
          isActive
            ? [
                {
                  required: true,
                  whitespace: true,
                  message: t('register.validation.smsRequired'),
                },
              ]
            : []
        }
      >
        <Input
          size='large'
          placeholder={t('register.sms.codePlaceholder')}
          inputMode='numeric'
        />
      </Item>

      <RegisterActions onBack={onBack} />
    </div>
  );
};

export default RegisterSmsStep;
