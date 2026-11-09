import type { FC } from 'react';
import { Typography, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { AvatarUpload } from '@features/avatar-upload';
import { IconLogout } from '@shared/assets';
import { routes } from '@shared/config';

import styles from './profile.module.scss';

const { Title } = Typography;

const PROFILE_DATA = {
  companyName: 'New World MCHJ',
  pinfl: '3455 6546 6456 65',
  directorName: "Hamidov Rashid Yo'ldoshevich",
  phone: '+99899 888 77 22',
  address: "Buxoro viloyati, Buxoro shaxri, Turkiston ko'chasi 44/12",
  avatarUrl: '/images/test/picture.png',
  initials: 'NW',
};

const Profile: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(routes.AUTH);
  };

  return (
    <section className={cn(styles['profile'], 'section')}>
      <div className={styles['profile__inner']}>
        <Title className={styles['profile__title']} level={3}>
          {t('profile.page')}
        </Title>

        <div className={styles['profile__card']}>
          <div className={styles['profile__body']}>
            <AvatarUpload
              defaultValue={PROFILE_DATA.avatarUrl}
              initials={PROFILE_DATA.initials}
            />

            <div className={styles['profile__info']}>
              <div className={styles['profile__field']}>
                <span className={styles['profile__label']}>
                  {t('profile.company')}
                </span>
                <span className={styles['profile__value']}>
                  {PROFILE_DATA.companyName}
                </span>
              </div>

              <div className={styles['profile__field']}>
                <span className={styles['profile__label']}>
                  {t('profile.pinfl')}
                </span>
                <span className={styles['profile__value']}>
                  {PROFILE_DATA.pinfl}
                </span>
              </div>

              <div className={styles['profile__field']}>
                <span className={styles['profile__label']}>
                  {t('profile.director')}
                </span>
                <span className={styles['profile__value']}>
                  {PROFILE_DATA.directorName}
                </span>
              </div>

              <div className={styles['profile__field']}>
                <span className={styles['profile__label']}>
                  {t('profile.phone')}
                </span>
                <span className={styles['profile__value']}>
                  {PROFILE_DATA.phone}
                </span>
              </div>

              <div className={styles['profile__field']}>
                <span className={styles['profile__label']}>
                  {t('profile.address')}
                </span>
                <span className={styles['profile__value']}>
                  {PROFILE_DATA.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['profile__footer']}>
          <Button
            className={styles['profile__logout-btn']}
            type='default'
            icon={<IconLogout />}
            onClick={handleLogout}
          >
            {t('profile.logout', 'Chiqish')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
