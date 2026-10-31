import type { FC } from 'react';
import { Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { IconFilePlus } from '@shared/assets';

import styles from './create-application-top.module.scss';

const { Title } = Typography;

interface ICreateApplicationTopProps {
  title?: string;
  onSaveDraft?: () => void;
}

const CreateApplicationTop: FC<ICreateApplicationTopProps> = ({
  title,
  onSaveDraft,
}) => {
  const { t } = useTranslation();
  const displayTitle = title ?? t('createApplication.top.title');

  return (
    <div className={styles['create-application-top']}>
      <Title className={styles['create-application-top__label']} level={5}>
        {displayTitle}
      </Title>
      <Button
        className={styles['create-application-top__draft']}
        type='default'
        icon={<IconFilePlus />}
        onClick={onSaveDraft}
      >
        {t('createApplication.top.saveDraft')}
      </Button>
    </div>
  );
};

export default CreateApplicationTop;
