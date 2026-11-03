import type { FC } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

import styles from './create-application-bottom.module.scss';

interface ICreateApplicationBottomProps {
  onReset?: () => void;
  onNext?: () => void;
  onBack?: () => void;
  onSubmit?: () => void;
  isLastStep: boolean;
  resetText?: string;
  nextText?: string;
  submitText?: string;
  backText?: string;
  isLoading?: boolean;
}

const CreateApplicationBottom: FC<ICreateApplicationBottomProps> = ({
  onReset,
  onNext,
  onBack,
  onSubmit,
  isLastStep,
  resetText,
  nextText,
  submitText,
  backText,
  isLoading = false,
}) => {
  const { t } = useTranslation();
  const currentResetText = resetText ?? t('createApplication.bottom.cancel');
  const currentNextText = nextText ?? t('createApplication.bottom.continue');
  const currentSubmitText = submitText ?? t('createApplication.bottom.submit');
  const currentBackText = backText ?? t('createApplication.bottom.back');

  return (
    <div className={styles['create-application-bottom']}>
      <Button
        className={styles['create-application-bottom__button-secondary']}
        type='default'
        onClick={onReset}
      >
        {currentResetText}
      </Button>
      {isLastStep && (
        <Button
          className={styles['create-application-bottom__button-secondary']}
          type='default'
          onClick={onBack}
        >
          {currentBackText}
        </Button>
      )}
      {isLastStep ? (
        <Button
          className={styles['create-application-bottom__button-primary']}
          type='primary'
          loading={isLoading}
          onClick={onSubmit}
        >
          {currentSubmitText}
        </Button>
      ) : (
        <Button
          className={styles['create-application-bottom__button-primary']}
          type='primary'
          loading={isLoading}
          onClick={onNext}
        >
          {currentNextText}
        </Button>
      )}
    </div>
  );
};

export default CreateApplicationBottom;
