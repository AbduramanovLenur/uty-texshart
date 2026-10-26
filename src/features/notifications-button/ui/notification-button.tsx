import type { FC } from 'react';
import { Button, Badge, Popover } from 'antd';

import NotificationPopover from './notification-popover';

import styles from './notification-button.module.scss';

const NotificationButton: FC = () => {
  return (
    <Popover
      classNames={{
        root: styles['notification-button__popover'],
        container: styles['notification-button__popover-container'],
      }}
      content={<NotificationPopover />}
      trigger='click'
      arrow={false}
      placement='bottomRight'
    >
      <Button className={styles['notification-button']} type='default'>
        <Badge className={styles['notification-button__badge']} count={'9'}>
          <svg width='18' height='18' viewBox='0 0 18 18'>
            <use href='/images/svg/sprite.svg#icon-bell' />
          </svg>
        </Badge>
      </Button>
    </Popover>
  );
};

export default NotificationButton;
