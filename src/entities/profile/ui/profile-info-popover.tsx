import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

import { routes } from '@shared/config';

import styles from './profile-info-popover.module.scss';

const ProfileInfoPopover: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles['profile-info-popover']}>
      <ul className={styles['profile-info-popover__list']}>
        <li className={styles['profile-info-popover__item']}>
          <Link className={styles['profile-info-popover__link']} to={routes.PROFILE}>
            {t('profile.page')}
          </Link>
        </li>
        <li className={styles['profile-info-popover__item']}>
          <Button className={styles['profile-info-popover__button']} type='text' size='small'>
            {t('profile.logout')}
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default ProfileInfoPopover;
