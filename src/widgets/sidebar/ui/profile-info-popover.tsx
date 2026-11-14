import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { useLogoutConfirm } from '@features/logout';
import { routes } from '@shared/config';

import styles from './profile-info-popover.module.scss';

interface IProps {
  profileTo?: string;
}

const ProfileInfoPopover: FC<IProps> = ({ profileTo = routes.PROFILE }) => {
  const { t } = useTranslation();
  const { confirmLogout } = useLogoutConfirm();

  return (
    <div className={cn(styles['profile-info-popover'])}>
      <ul className={cn(styles['profile-info-popover__list'])}>
        <li className={cn(styles['profile-info-popover__item'])}>
          <Link className={cn(styles['profile-info-popover__link'])} to={profileTo}>
            {t('profile.page')}
          </Link>
        </li>
        <li className={cn(styles['profile-info-popover__item'])}>
          <Button
            className={cn(styles['profile-info-popover__button'])}
            type='text'
            size='small'
            onClick={confirmLogout}
          >
            {t('profile.logout')}
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfoPopover;
