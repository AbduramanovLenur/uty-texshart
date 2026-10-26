import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import { routes } from '@shared/config';

import styles from './profile-info-popover.module.scss';

const ProfileInfoPopover: FC = () => {
  return (
    <div className={styles['profile-info-popover']}>
      <ul className={styles['profile-info-popover__list']}>
        <li className={styles['profile-info-popover__item']}>
          <Link className={styles['profile-info-popover__link']} to={routes.PROFILE}>
            Profil
          </Link>
        </li>
        <li className={styles['profile-info-popover__item']}>
          <Button className={styles['profile-info-popover__button']} type='text' size='small'>
            Chiqish
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfoPopover;
