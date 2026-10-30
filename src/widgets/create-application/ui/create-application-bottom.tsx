import type { FC } from 'react';
import { Button } from 'antd';

import styles from './create-application-bottom.module.scss';

interface ICreateApplicationBottomProps {
  onReset?: () => void;
  onNext?: () => void;
  resetText?: string;
  nextText?: string;
  isLoading?: boolean;
}

const CreateApplicationBottom: FC<ICreateApplicationBottomProps> = ({
  onReset,
  onNext,
  resetText = 'Bekor qilish',
  nextText = 'Davom etish',
  isLoading = false,
}) => {
  return (
    <div className={styles['create-application-bottom']}>
      <Button
        className={styles['create-application-bottom__reset']}
        type='default'
        onClick={onReset}
      >
        {resetText}
      </Button>
      <Button
        className={styles['create-application-bottom__next']}
        type='primary'
        loading={isLoading}
        onClick={onNext}
      >
        {nextText}
      </Button>
    </div>
  );
};

export default CreateApplicationBottom;
