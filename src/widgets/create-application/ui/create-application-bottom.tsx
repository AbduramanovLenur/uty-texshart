import type { FC } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

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
  resetText,
  nextText,
  isLoading = false,
}) => {
  const { t } = useTranslation();
  const currentResetText = resetText ?? t('createApplication.bottom.cancel');
  const currentNextText = nextText ?? t('createApplication.bottom.continue');

  return (
    <div className={styles['create-application-bottom']}>
      <Button
        className={styles['create-application-bottom__reset']}
        type='default'
        onClick={onReset}
      >
        {currentResetText}
      </Button>
      <Button
        className={styles['create-application-bottom__next']}
        type='primary'
        loading={isLoading}
        onClick={onNext}
      >
        {currentNextText}
      </Button>
    </div>
  );
};

export default CreateApplicationBottom;
