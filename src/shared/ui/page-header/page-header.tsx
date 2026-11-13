import type { FC, ReactNode } from 'react';
import { Typography, Button } from 'antd';
import cn from 'classnames';

import { IconLeftChevron } from '@shared/assets';

import styles from './page-header.module.scss';

const { Title } = Typography;

interface IProps {
  onClick: () => void;
  children: ReactNode;
}

const PageHeader: FC<IProps> = ({ onClick, children }) => {
  return (
    <div className={cn(styles['page-header'])}>
      <Button
        className={cn(styles['page-header__back'])}
        type='default'
        onClick={onClick}
      >
        <IconLeftChevron />
      </Button>
      <Title className={cn(styles['page-header__title'])} level={3}>
        {children}
      </Title>
    </div>
  );
};

export default PageHeader;
