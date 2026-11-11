import { useState, type FC } from 'react';
import { Form, type FormProps } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { StepList } from '../model/constants/step-list';
import { FormFields } from '../model/constants/form-fields';
import type { IFormValues } from '../model/types/form';

import CreateApplicationSteps from './create-application-steps';
import CreateApplicationTop from './create-application-top';
import CreateApplicationForm from './create-application-form';
import CreateApplicationMap from './create-application-map';
import CreateApplicationBottom from './create-application-bottom';

import { skipLeaveConfirmState } from '@features/leave-confirm-modal';
import { open as openSignApplicationModal, SignApplicationModal } from '@features/sign-application-modal';
import { EImzo } from '@features/e-imzo';
import { routes } from '@shared/config';

import styles from './create-application-body.module.scss';

const { useForm, useWatch, Item } = Form;

const CreateApplicationBody: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = useForm<IFormValues>();
  const [step, setStep] = useState(StepList.FORM);
  const certificate = useWatch<string | undefined>(FormFields.CERTIFICATE, form);

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

  const handleFinish = (values: IFormValues) => {
    console.log('Form submit values:', values);
    dispatch(openSignApplicationModal());
  };

  const handleFinishFailed: NonNullable<FormProps<IFormValues>['onFinishFailed']> = ({ errorFields }) => {
    const hasFormErrors = errorFields.some(({ name }) => name[0] !== FormFields.COORDINATES);

    if (step === StepList.MAP && hasFormErrors) {
      setStep(StepList.FORM);
    }
  };

  const handleSelectCertificate = (value: string | undefined) => {
    form.setFieldValue(FormFields.CERTIFICATE, value);
  };

  const handleCloseSignModal = () => {
    form.setFieldValue(FormFields.CERTIFICATE, undefined);
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
          onFinishFailed={handleFinishFailed}
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
          <Item name={FormFields.CERTIFICATE} hidden />
        </Form>
        <CreateApplicationBottom
          isLastStep={step === StepList.MAP}
          onReset={handleReset}
          onBack={handleBack}
          onNext={handleNext}
          onSubmit={handleSubmit}
        />
      </div>
      <SignApplicationModal onClose={handleCloseSignModal}>
        <EImzo
          value={certificate}
          onChange={handleSelectCertificate}
        />
      </SignApplicationModal>
    </div>
  );
};

export default CreateApplicationBody;
