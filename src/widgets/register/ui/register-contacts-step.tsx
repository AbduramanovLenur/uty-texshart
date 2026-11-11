import type { FC, MouseEvent } from 'react';
import { Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { FormFields } from '../model/constants/form-fields';
import { validateAgreement, validatePhone } from '../model/lib/helpers/validators';

import PhoneInput from './phone-input';
import RegisterActions from './register-actions';
import styles from './register-contacts-step.module.scss';

import { open as openRegisterTermsModal } from '@features/register-terms-modal';

const { Item } = Form;

interface IRegisterContactsStepProps {
  isActive: boolean;
  onBack: () => void;
}

const RegisterContactsStep: FC<IRegisterContactsStepProps> = ({
  isActive,
  onBack,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleTermsClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(openRegisterTermsModal());
  };

  return (
    <div className={styles['register-contacts-step']}>
      <div className={styles['register-contacts-step__wrapper']}>
        <Item
          label={t('register.contacts.phoneLabel')}
          name={FormFields.PHONE}
          rules={
            isActive
              ? [
                  {
                    required: true,
                    validator: validatePhone(t),
                  },
                ]
              : []
          }
        >
          <PhoneInput placeholder={t('register.contacts.phonePlaceholder')} />
        </Item>

        <Item
          label={t('register.contacts.emailLabel')}
          name={FormFields.EMAIL}
          rules={
            isActive
              ? [
                  {
                    type: 'email',
                    message: t('register.validation.emailInvalid'),
                  },
                ]
              : []
          }
        >
          <Input
            size='large'
            placeholder={t('register.contacts.emailPlaceholder')}
          />
        </Item>
      </div>

      <Item
        className={styles['register-contacts-step__agreement-item']}
        name={FormFields.AGREED}
        valuePropName='checked'
        rules={
          isActive
            ? [
                {
                  validator: validateAgreement(t),
                },
              ]
            : []
        }
      >
        <Checkbox className={styles['register-contacts-step__agreement-checkbox']}>
          <button
            className={styles['register-contacts-step__terms-link']}
            type='button'
            onClick={handleTermsClick}
          >
            {t('register.contacts.termsLink')}
          </button>
          {' '}
          {t('register.contacts.termsAgreement')}
        </Checkbox>
      </Item>

      <RegisterActions onBack={onBack} />
    </div>
  );
};

export default RegisterContactsStep;
