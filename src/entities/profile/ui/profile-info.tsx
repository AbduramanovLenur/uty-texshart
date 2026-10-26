import { useEffect, useState } from 'react';
import { Avatar, Button, Popover } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

import ProfileInfoPopover from './profile-info-popover';

import styles from './profile-info.module.scss';

const ProfileInfo = () => {
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

  return (
    <div className={styles['profile-info']}>
      <div className={styles['profile-info__wrapper']}>
        <Avatar
          className={styles['profile-info__avatar']}
          src='https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001877.png'
        />

        <div className={styles['profile-info__name']}>
          New World MCHJ
        </div>
      </div>

      <Popover
        classNames={{
          root: styles['profile-info__popover'],
        }}
        content={<ProfileInfoPopover />}
        arrow={false}
        placement='topRight'
        trigger='click'
        open={open}
        onOpenChange={handleOpenChange}
      >
        <Button
          type='text'
          className={styles['profile-info__button']}
        >
          <MoreOutlined
            className={styles['profile-info__action']}
          />
        </Button>
      </Popover>
    </div>
  );
};

export default ProfileInfo;
