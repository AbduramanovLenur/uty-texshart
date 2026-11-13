import { type FC, type ReactNode, useEffect, useState } from 'react';
import { Avatar, Button, Popover } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import cn from 'classnames';

import styles from './profile-info.module.scss';

interface IProps {
  children?: ReactNode;
}

const ProfileInfo: FC<IProps> = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, []);

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);
  };

  const handleContentClick = () => {
    setOpen(false);
  };

  return (
    <div className={cn(styles['profile-info'])}>
      <div className={cn(styles['profile-info__wrapper'])}>
        <Avatar
          className={cn(styles['profile-info__avatar'])}
          src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png'
        />

        <div className={cn(styles['profile-info__name'])}>
          New World MCHJ
        </div>
      </div>

      <Popover
        classNames={{
          root: cn(styles['profile-info__popover']),
        }}
        content={
          <div onClick={handleContentClick}>
            {children}
          </div>
        }
        arrow={false}
        placement='topRight'
        trigger='click'
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Button
          type='text'
          className={cn(styles['profile-info__button'])}
        >
          <MoreOutlined
            className={cn(styles['profile-info__action'])}
          />
        </Button>
      </Popover>
    </div>
  );
};

export default ProfileInfo;
