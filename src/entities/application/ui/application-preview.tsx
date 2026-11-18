import type { FC } from 'react';
import cn from 'classnames';

import type { IApplicationPreview } from '../model/types/application-preview';

import { IconPrimaryRightArrow } from '@shared/assets';

import styles from './application-preview.module.scss';

interface IProps {
  item: IApplicationPreview;
  isActive?: boolean;
  onClick?: (id: string) => void;
};

const ApplicationPreview: FC<IProps> = ({ item, isActive, onClick }) => {
  const isItemActive = Boolean(isActive);

  const handleClick = () => {
    onClick?.(item.id);
  };

  return (
    <div className={cn(styles['application-preview'], { [styles['is-active']]: isItemActive })}>
      <div className={cn(styles['application-preview__content'])}>
        <div className={cn(styles['application-preview__image'])}>
          <img src={item.icon} alt={item.title} loading='lazy' width={56} height={56} />
        </div>
        <div className={cn(styles['application-preview__information'])}>
          <div className={cn(styles['application-preview__number'])}>
            {item.code}
          </div>
          <div className={cn(styles['application-preview__label'])}>
            {item.title}
          </div>
          <div className={cn(styles['application-preview__sublabel'])}>
            {item.subtitle}
          </div>
        </div>
      </div>
      <button
        className={cn(styles['application-preview__button'], {
          [styles['is-active']]: isItemActive,
        })}
        type='button'
        onClick={handleClick}
      >
        <IconPrimaryRightArrow />
      </button>
    </div>
  );
};

export default ApplicationPreview;
