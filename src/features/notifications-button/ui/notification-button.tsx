import type { FC } from 'react';
import { Button, Badge, Popover } from 'antd';
import cn from 'classnames';

import NotificationPopover from './notification-popover';

import { IconBell } from '@shared/assets';

import styles from './notification-button.module.scss';

const NotificationButton: FC = () => {
  return (
    <Popover
      classNames={{
        root: cn(styles['notification-button__popover']),
        container: cn(styles['notification-button__popover-container']),
      }}
      content={<NotificationPopover />}
      trigger='click'
      arrow={false}
      placement='bottomRight'
    >
      <Button className={cn(styles['notification-button'])} type='default'>
        <Badge className={cn(styles['notification-button__badge'])} count={'9'}>
          <IconBell />
        </Badge>
      </Button>
    </Popover>
  );
};

export default NotificationButton;
