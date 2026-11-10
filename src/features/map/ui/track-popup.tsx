import type { FC } from 'react';

import type { ITrackProperties } from '../model/types/track';

import styles from './map.module.scss';

interface IProps {
  properties: ITrackProperties;
  coordinates?: [number, number];
}

const TrackPopup: FC<IProps> = ({ properties, coordinates }) => {
  const name = properties.nomi || 'Железнодорожный путь';
  const hasLength =
    properties.uzunlik_m !== null && properties.uzunlik_m !== undefined;
  const hasElectrified =
    properties.elektrlashgan !== null && properties.elektrlashgan !== undefined;

  return (
    <div className={styles['map-popup']}>
      <div
        className={`${styles['map-popup__title']} ${styles['map-popup__title--track']}`}
      >
        {name}
      </div>

      {coordinates && (
        <div className={styles['map-popup__row']}>
          <span className={styles['map-popup__label']}>Координаты пути:</span>
          <span className={styles['map-popup__value']}>
            {coordinates[0].toFixed(6)}, {coordinates[1].toFixed(6)}
          </span>
        </div>
      )}

      {properties.turi && (
        <div className={styles['map-popup__row']}>
          <span className={styles['map-popup__label']}>Категория:</span>
          <span className={styles['map-popup__value']}>{properties.turi}</span>
        </div>
      )}

      {hasLength && (
        <div className={styles['map-popup__row']}>
          <span className={styles['map-popup__label']}>Протяженность:</span>
          <span className={styles['map-popup__value']}>
            {((properties.uzunlik_m as number) / 1000).toFixed(2)} км
          </span>
        </div>
      )}

      {hasElectrified && (
        <div className={styles['map-popup__row']}>
          <span className={styles['map-popup__label']}>Электрификация:</span>
          <span className={styles['map-popup__value']}>
            {properties.elektrlashgan
              ? `Да (${properties.kuchlanish || '25000'} В)`
              : 'Нет'}
          </span>
        </div>
      )}

      {properties.viloyat && (
        <div className={styles['map-popup__row']}>
          <span className={styles['map-popup__label']}>Регион:</span>
          <span className={styles['map-popup__value']}>
            {properties.viloyat}
            {properties.tuman ? `, ${properties.tuman}` : ''}
          </span>
        </div>
      )}
    </div>
  );
};

export default TrackPopup;
