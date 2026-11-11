import { useEffect, useState, type FC } from 'react';
import { Form, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { FormFields } from '../model/constants/form-fields';
import { REDIRECT_DELAY_MS, REGISTER_COMPANY_NAME } from '../model/constants/register';
import { StepList } from '../model/constants/step-list';
import { maskPhoneTail } from '../model/lib/utils/phone';
import type { IRegisterFormValues } from '../model/types/form';
import type { IStepHeader, TStep } from '../model/types/step';

import RegisterContactsStep from './register-contacts-step';
import RegisterSmsStep from './register-sms-step';
import styles from './register.module.scss';

import { RegisterTermsModal } from '@features/register-terms-modal';
import { routes } from '@shared/config';

const { Title } = Typography;
const { useForm, useWatch } = Form;

const Register: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form] = useForm<IRegisterFormValues>();
  const [step, setStep] = useState<TStep>(StepList.CONTACTS);

  const phone = useWatch(FormFields.PHONE, form);

  useEffect(() => {
    if (step !== StepList.SUCCESS) {
      return;
    }

    const timer = window.setTimeout(() => {
      navigate(routes.DASHBOARD);
    }, REDIRECT_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
    };
  }, [step, navigate]);

  const headerByStep: Record<TStep, IStepHeader> = {
    [StepList.CONTACTS]: {
      title: t('register.contacts.title', { name: REGISTER_COMPANY_NAME }),
      subtitle: t('register.contacts.subtitle'),
    },
    [StepList.SMS_CODE]: {
      title: t('register.sms.title'),
      subtitle: t('register.sms.subtitle', { phone: maskPhoneTail(phone) }),
    },
    [StepList.SUCCESS]: {
      title: t('register.success.title'),
      subtitle: t('register.success.subtitle'),
    },
  };

  const currentHeader = headerByStep[step];

  const handleFinish = (values: IRegisterFormValues) => {
    console.log('Success:', values);
    if (step === StepList.CONTACTS) {
      setStep(StepList.SMS_CODE);
      return;
    }

    if (step === StepList.SMS_CODE) {
      setStep(StepList.SUCCESS);
    }
  };

  return (
    <section className={styles['register']}>
      <div className={styles['register__inner']}>
        <div className={styles['register__overlay']}>
          <div className={styles['register__illustration']}></div>

          <Title className={styles['register__title']} level={3}>
            {currentHeader.title}
          </Title>
          <p className={styles['register__subtitle']}>
            {currentHeader.subtitle}
          </p>

          {step !== StepList.SUCCESS && (
            <Form
              form={form}
              className={styles['register__form']}
              layout='vertical'
              preserve
              onFinish={handleFinish}
            >
              <div
                className={styles['register__step']}
                hidden={step !== StepList.CONTACTS}
              >
                <RegisterContactsStep
                  isActive={step === StepList.CONTACTS}
                  onBack={() => navigate(routes.AUTH)}
                />
              </div>

              <div
                className={styles['register__step']}
                hidden={step !== StepList.SMS_CODE}
              >
                <RegisterSmsStep
                  isActive={step === StepList.SMS_CODE}
                  onBack={() => setStep(StepList.CONTACTS)}
                />
              </div>
            </Form>
          )}
        </div>
      </div>

      <RegisterTermsModal />
    </section>
  );
};

export default Register;
