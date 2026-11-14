import type { FC } from 'react';
import { Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { AvatarUpload } from '@features/avatar-upload';
import { useLogoutConfirm } from '@features/logout';
import { IconLogout } from '@shared/assets';

import styles from './profile.module.scss';

const { Title } = Typography;

const PROFILE_DATA = {
  companyName: 'New World MCHJ',
  pinfl: '3455 6546 6456 65',
  directorName: "Hamidov Rashid Yo'ldoshevich",
  phone: '+99899 888 77 22',
  address: "Buxoro viloyati, Buxoro shaxri, Turkiston ko'chasi 44/12",
  avatarUrl: '/images/test/picture.png',
  initials: 'L',
};

const Profile: FC = () => {
  const { t } = useTranslation();
  const { confirmLogout } = useLogoutConfirm();

  return (
    <section className={cn(styles['profile'], 'section')}>
      <div className={cn(styles['profile__inner'])}>
        <Title className={cn(styles['profile__title'])} level={3}>
          {t('profile.page')}
        </Title>
        <div className={cn(styles['profile__card'])}>
          <div className={cn(styles['profile__body'])}>
            <AvatarUpload
              defaultValue={PROFILE_DATA.avatarUrl}
              initials={PROFILE_DATA.initials}
            />
            <div className={cn(styles['profile__info'])}>
              <div className={cn(styles['profile__field'])}>
                <span className={cn(styles['profile__label'])}>
                  {t('profile.company')}
                </span>
                <span className={cn(styles['profile__value'])}>
                  {PROFILE_DATA.companyName}
                </span>
              </div>
              <div className={cn(styles['profile__field'])}>
                <span className={cn(styles['profile__label'])}>
                  {t('profile.pinfl')}
                </span>
                <span className={cn(styles['profile__value'])}>
                  {PROFILE_DATA.pinfl}
                </span>
              </div>
              <div className={cn(styles['profile__field'])}>
                <span className={cn(styles['profile__label'])}>
                  {t('profile.director')}
                </span>
                <span className={cn(styles['profile__value'])}>
                  {PROFILE_DATA.directorName}
                </span>
              </div>
              <div className={cn(styles['profile__field'])}>
                <span className={cn(styles['profile__label'])}>
                  {t('profile.phone')}
                </span>
                <span className={cn(styles['profile__value'])}>
                  {PROFILE_DATA.phone}
                </span>
              </div>
              <div className={cn(styles['profile__field'])}>
                <span className={cn(styles['profile__label'])}>
                  {t('profile.address')}
                </span>
                <span className={cn(styles['profile__value'])}>
                  {PROFILE_DATA.address}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={cn(styles['profile__footer'])}>
          <Button
            className={cn(styles['profile__logout-btn'])}
            type='default'
            icon={<IconLogout />}
            onClick={confirmLogout}
          >
            {t('profile.logout')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
