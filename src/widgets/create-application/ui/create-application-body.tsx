import { useState, type FC, type ReactElement } from 'react';
import { Form } from 'antd';

import { stepList } from '../model/step-list';

import CreateApplicationSteps from './create-application-steps';
import CreateApplicationTop from './create-application-top';
import CreateApplicationForm from './create-application-form';
import CreateApplicationMap from './create-application-map';
import CreateApplicationBottom from './create-application-bottom';

import styles from './create-application-body.module.scss';

const component: Record<number, ReactElement> = {
  [stepList.FORM]: <CreateApplicationForm />,
  [stepList.MAP]: <CreateApplicationMap />,
};

const CreateApplicationBody: FC = () => {
  const [form] = Form.useForm();
  const [step, setStep] = useState(stepList.FORM);

  const onChangeStep = (value: number) => {
    setStep(value);
  };

  const handleReset = () => {
    form.resetFields();
  };

  const handleNext = async () => {
    try {
      await form.validateFields();
      if (step === stepList.FORM) {
        setStep(stepList.MAP);
      }
    } catch {
      // Ant Design автоматически подсветит поля с ошибками
    }
  };

  const handleSaveDraft = () => {
    // TODO: implement draft saving logic
  };

  return (
    <div className={styles['create-application-body']}>
      <CreateApplicationSteps
        current={step}
        onChange={onChangeStep}
      />
      <div className={styles['create-application-body__content']}>
        <CreateApplicationTop onSaveDraft={handleSaveDraft} />
        <Form
          form={form}
          className={styles['create-application-body__form']}
          layout='vertical'
          preserve
        >
          {component[step]}
        </Form>
        <CreateApplicationBottom
          onReset={handleReset}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

export default CreateApplicationBody;
