import type { FC } from 'react';
import cn from 'classnames';

import type { IApplicationPreview } from '../model/types';

import { IconPrimaryRightArrow } from '@shared/assets';

import styles from './application-preview.module.scss';

interface IProps {
  item: IApplicationPreview;
};

const ApplicationPreview: FC<IProps> = ({ item }) => {
  return (
    <div className={cn(styles['application-preview'], { [styles['is-active']]: item?.active })}>
      <div className={styles['application-preview__content']}>
        <div className={styles['application-preview__image']}>
          <img src={item.icon} alt={item.title} loading='lazy' width={56} height={56} />
        </div>
        <div className={styles['application-preview__information']}>
          <div className={styles['application-preview__number']}>
            {item.code}
          </div>
          <div className={styles['application-preview__label']}>
            {item.title}
          </div>
          <div className={styles['application-preview__sublabel']}>
            {item.subtitle}
          </div>
        </div>
      </div>
      <button className={styles['application-preview__button']} type='button'>
        <IconPrimaryRightArrow />
      </button>
    </div>
  );
};

export default ApplicationPreview;
