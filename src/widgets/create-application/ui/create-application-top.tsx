import type { FC } from 'react';
import { Typography, Button } from 'antd';

import { IconFilePlus } from '@shared/assets';

import styles from './create-application-top.module.scss';

const { Title } = Typography;

interface ICreateApplicationTopProps {
  title?: string;
  onSaveDraft?: () => void;
}

const CreateApplicationTop: FC<ICreateApplicationTopProps> = ({
  title = 'Ariza ma’lumotlarini to’ldiring',
  onSaveDraft,
}) => {
  return (
    <div className={styles['create-application-top']}>
      <Title className={styles['create-application-top__label']} level={5}>
        {title}
      </Title>
      <Button
        className={styles['create-application-top__draft']}
        type='default'
        icon={<IconFilePlus />}
        onClick={onSaveDraft}
      >
        Qoralamalarga qo’shish
      </Button>
    </div>
  );
};

export default CreateApplicationTop;
