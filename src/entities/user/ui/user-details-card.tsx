import type { FC, ReactNode } from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import type { IUserDetails } from '../model/types/user';
import { mockUserDetails } from '../model/mock';

import styles from './user-details-card.module.scss';

const { Title } = Typography;

interface IProps {
  user?: IUserDetails;
  actionSlot?: ReactNode;
  className?: string;
}

const UserDetailsCard: FC<IProps> = ({ user = mockUserDetails, actionSlot, className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles['user-details-card'], className)}>
      <div className={cn(styles['user-details-card__header'])}>
        <Title level={5} className={cn(styles['user-details-card__title'])}>
          {t('users.card.title')}
        </Title>
        <div className={cn(styles['user-details-card__actions'])}>
          {actionSlot}
        </div>
      </div>

      <div className={cn(styles['user-details-card__grid'])}>
        <div className={cn(styles['user-details-card__col'])}>
          <div className={cn(styles['user-details-card__item'])}>
            <div className={cn(styles['user-details-card__label'])}>
              {t('users.card.pinfl')}
            </div>
            <div className={cn(styles['user-details-card__value'])}>
              {user.pinfl}
            </div>
          </div>

          <div className={cn(styles['user-details-card__item'])}>
            <div className={cn(styles['user-details-card__label'])}>
              {t('users.card.fullName')}
            </div>
            <div className={cn(styles['user-details-card__value'])}>
              {user.fullName}
            </div>
          </div>

          <div className={cn(styles['user-details-card__item'])}>
            <div className={cn(styles['user-details-card__label'])}>
              {t('users.card.phone')}
            </div>
            <div className={cn(styles['user-details-card__value'])}>
              {user.phone}
            </div>
          </div>

          <div className={cn(styles['user-details-card__item'])}>
            <div className={cn(styles['user-details-card__label'])}>
              {t('users.card.regionalDepartment')}
            </div>
            <div className={cn(styles['user-details-card__value'])}>
              {user.regionalDepartment}
            </div>
          </div>
        </div>

        <div className={cn(styles['user-details-card__col'])}>
          <div className={cn(styles['user-details-card__item'])}>
            <div className={cn(styles['user-details-card__label'])}>
              {t('users.card.role')}
            </div>
            <div className={cn(styles['user-details-card__value'])}>
              {user.role}
            </div>
          </div>

          <div className={cn(styles['user-details-card__item'])}>
            <div className={cn(styles['user-details-card__label'])}>
              {t('users.card.position')}
            </div>
            <div className={cn(styles['user-details-card__value'])}>
              {user.position}
            </div>
          </div>

          <div className={cn(styles['user-details-card__item'])}>
            <div className={cn(styles['user-details-card__label'])}>
              {t('users.card.email')}
            </div>
            <div className={cn(styles['user-details-card__value'])}>
              {user.email}
            </div>
          </div>

          <div className={cn(styles['user-details-card__item'])}>
            <div className={cn(styles['user-details-card__label'])}>
              {t('users.card.comment')}
            </div>
            <div className={cn(styles['user-details-card__value'])}>
              {user.comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
