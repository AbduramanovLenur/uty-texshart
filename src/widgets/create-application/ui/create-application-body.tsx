import { useState, type FC } from 'react';
import { Form } from 'antd';
import { useNavigate } from 'react-router-dom';

import { StepList } from '../model/step-list';

import CreateApplicationSteps from './create-application-steps';
import CreateApplicationTop from './create-application-top';
import CreateApplicationForm from './create-application-form';
import CreateApplicationMap from './create-application-map';
import CreateApplicationBottom from './create-application-bottom';

import { skipLeaveConfirmState } from '@features/leave-confirm-modal';
import { routes } from '@shared/config';

import styles from './create-application-body.module.scss';

const { useForm } = Form;

const CreateApplicationBody: FC = () => {
  const navigate = useNavigate();
  const [form] = useForm();
  const [step, setStep] = useState(StepList.FORM);

  const onChangeStep = (value: number) => {
    setStep(value);
  };

  const handleReset = () => {
    form.resetFields();
    navigate(routes.APPLICATIONS);
  };

  const handleBack = () => {
    setStep(StepList.FORM);
  };

  const handleNext = async () => {
    await form.validateFields().then(() => {
      setStep(StepList.MAP);
    });
  };

  const handleSubmit = () => {
    form.submit();
  };

  const handleFinish = (values: Record<string, unknown>) => {
    console.log('Form submit values:', values);
  };

  const handleSaveDraft = () => {
    const draftValues = form.getFieldsValue(true);
    console.log('Draft values:', draftValues);
    navigate(routes.APPLICATIONS, { state: skipLeaveConfirmState });
  };

  return (
    <div className={styles['create-application-body']}>
      <CreateApplicationSteps
        current={step}
        onChange={onChangeStep}
      />
      <div className={styles['create-application-body__content']}>
        <CreateApplicationTop
          onSaveDraft={handleSaveDraft}
        />
        <Form
          form={form}
          className={styles['create-application-body__form']}
          layout='vertical'
          preserve
          onFinish={handleFinish}
        >
          <div
            className={styles['create-application-body__step']}
            hidden={step !== StepList.FORM}
          >
            <CreateApplicationForm />
          </div>
          <div
            className={styles['create-application-body__step']}
            hidden={step !== StepList.MAP}
          >
            <CreateApplicationMap isActive={step === StepList.MAP} />
          </div>
        </Form>
        <CreateApplicationBottom
          isLastStep={step === StepList.MAP}
          onReset={handleReset}
          onBack={handleBack}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CreateApplicationBody;
