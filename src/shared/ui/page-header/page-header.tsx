import type { FC, ReactNode } from 'react';
import { Typography, Button } from 'antd';
import cn from 'classnames';

import IconLeftChevron from '../../assets/icons/icon-left-chevron';

import styles from './page-header.module.scss';

const { Title } = Typography;

interface IProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

const PageHeader: FC<IProps> = ({ onClick, children, className }) => {
  return (
    <div className={cn(styles['page-header'], className)}>
      <Button
        className={cn(styles['page-header__back'])}
        type='default'
        size='large'
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
