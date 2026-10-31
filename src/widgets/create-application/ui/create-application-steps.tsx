import type { FC } from 'react';
import { Steps } from 'antd';
import { useTranslation } from 'react-i18next';

import { getSteps } from '../model/steps';

import styles from './create-application-steps.module.scss';

interface ICreateApplicationStepsProps {
  current: number;
  onChange: (value: number) => void;
}

const CreateApplicationSteps: FC<ICreateApplicationStepsProps> = ({
  current,
  onChange,
}) => {
  const { t } = useTranslation();
  const items = getSteps(t);

  return (
    <Steps
      classNames={{
        root: styles['create-application-steps'],
        item: styles['create-application-steps__item'],
      }}
      type='panel'
      current={current}
      onChange={onChange}
      items={items}
    />
  );
};

export default CreateApplicationSteps;
