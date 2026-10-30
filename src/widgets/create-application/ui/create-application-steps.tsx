import type { FC } from 'react';
import { Steps } from 'antd';

import { steps } from '../model/steps';

import styles from './create-application-steps.module.scss';

interface ICreateApplicationStepsProps {
  current: number;
  onChange: (value: number) => void;
}

const CreateApplicationSteps: FC<ICreateApplicationStepsProps> = ({
  current,
  onChange,
}) => {
  return (
    <Steps
      classNames={{
        root: styles['create-application-steps'],
        item: styles['create-application-steps__item'],
      }}
      type='panel'
      current={current}
      onChange={onChange}
      items={steps}
    />
  );
};

export default CreateApplicationSteps;
