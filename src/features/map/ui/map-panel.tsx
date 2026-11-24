import type { FC } from 'react';
import { message, Button } from 'antd';
import { useTranslation } from 'react-i18next';

import CoordsInputRow from './coords-input-row';
import type { IRailwayPointInfo } from '../model/types/point-info';
import { formatCoords } from '../model/lib/utils/format-coords';
import { getCoordsKey } from '../model/lib/utils/get-coords-key';

import { IconFiles } from '@shared/assets';

import styles from './map-panel.module.scss';

interface IProps {
  readOnly?: boolean;
  selectedCoords?: [number, number] | null;
  pointInfo: IRailwayPointInfo | null;
  onApplyManualCoords: (coords: [number, number]) => void;
}

const RailwayTrackIcon: FC = () => (
  <svg
    width='18'
    height='36'
    viewBox='0 0 18 36'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <line x1='4' y1='0' x2='4' y2='36' stroke='#CBD5E1' strokeWidth='2' />
    <line x1='14' y1='0' x2='14' y2='36' stroke='#CBD5E1' strokeWidth='2' />
    <line x1='2' y1='6' x2='16' y2='6' stroke='#94A3B8' strokeWidth='1.5' />
    <line x1='2' y1='14' x2='16' y2='14' stroke='#94A3B8' strokeWidth='1.5' />
    <line x1='2' y1='22' x2='16' y2='22' stroke='#94A3B8' strokeWidth='1.5' />
    <line x1='2' y1='30' x2='16' y2='30' stroke='#94A3B8' strokeWidth='1.5' />
  </svg>
);

const MapPanel: FC<IProps> = ({
  readOnly = false,
  selectedCoords,
  pointInfo,
  onApplyManualCoords,
}) => {
  const { t } = useTranslation();

  const handleCopy = () => {
    if (!selectedCoords) {
      return;
    }

    navigator.clipboard.writeText(formatCoords(selectedCoords));
    message.success(t('map.copied'));
  };

  const hasPoint = Boolean(selectedCoords && pointInfo);
  const currentCoordsKey = getCoordsKey(selectedCoords);

  return (
    <div className={styles['map-panel']}>
      <div className={styles['map-panel__overlay']}>
        <div className={styles['map-panel__header']}>
          <span className={styles['map-panel__label']}>
            {t('map.selectedPoint')}
          </span>

          {hasPoint && selectedCoords ? (
            <>
              <div className={styles['map-panel__coords']}>
                <div className={styles['map-panel__coord-wrapper']}>
                  <span className={styles['map-panel__coord-value']}>
                    {selectedCoords[0].toFixed(6)}
                  </span>
                  <span className={styles['map-panel__coord-value']}>
                    {selectedCoords[1].toFixed(6)}
                  </span>
                </div>
                <Button
                  className={styles['map-panel__copy-btn']}
                  size='large'
                  onClick={handleCopy}
                >
                  <IconFiles />
                </Button>
              </div>
              <div className={styles['map-panel__dms']}>
                {pointInfo?.dmsString}
              </div>
            </>
          ) : (
            <div className={styles['map-panel__empty']}>
              {t('map.emptyPointDescription')}
            </div>
          )}
        </div>

        {!readOnly && (
          <CoordsInputRow
            key={currentCoordsKey}
            initialValue={selectedCoords ? formatCoords(selectedCoords) : ''}
            onApplyManualCoords={onApplyManualCoords}
          />
        )}

        {hasPoint && pointInfo && (
          <>
            {(pointInfo.topStation || pointInfo.bottomStation) && (
              <div className={styles['map-panel__station-card']}>
                <div className={styles['map-panel__track-axis']}>
                  {pointInfo.topStation && <RailwayTrackIcon />}
                  {pointInfo.pointKmInfo && (
                    <div className={styles['map-panel__point-dot']} />
                  )}
                  {pointInfo.bottomStation && <RailwayTrackIcon />}
                </div>

                <div className={styles['map-panel__station-content']}>
                  {pointInfo.topStation && (
                    <div className={styles['map-panel__station-block']}>
                      <span className={styles['map-panel__station-name']}>
                        {pointInfo.topStation.name}
                      </span>
                      <span className={styles['map-panel__station-meta']}>
                        {t('map.centerLine')} {pointInfo.topStation.km} km{' '}
                        {pointInfo.topStation.pk} pk
                      </span>
                      <span className={styles['map-panel__station-meta']}>
                        {pointInfo.topStation.distanceKm.toLocaleString('ru-RU')}{' '}
                        km
                      </span>
                    </div>
                  )}

                  {pointInfo.pointKmInfo && (
                    <div className={styles['map-panel__point-km']}>
                      {pointInfo.pointKmInfo.formatted}
                    </div>
                  )}

                  {pointInfo.bottomStation && (
                    <div className={styles['map-panel__station-block']}>
                      <span className={styles['map-panel__station-name']}>
                        {pointInfo.bottomStation.name}
                      </span>
                      <span className={styles['map-panel__station-meta']}>
                        {t('map.centerLine')} {pointInfo.bottomStation.km} km{' '}
                        {pointInfo.bottomStation.pk} pk
                      </span>
                      <span className={styles['map-panel__station-meta']}>
                        {pointInfo.bottomStation.distanceKm.toLocaleString('ru-RU')}{' '}
                        km
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className={styles['map-panel__details']}>
              <div className={styles['map-panel__detail-item']}>
                <span className={styles['map-panel__detail-label']}>
                  {t('map.trackName')}
                </span>
                <div className={styles['map-panel__detail-value']}>
                  {pointInfo.trackName || '—'}
                </div>
              </div>

              <div className={styles['map-panel__detail-item']}>
                <span className={styles['map-panel__detail-label']}>
                  {t('map.gauge')}
                </span>
                <div className={styles['map-panel__detail-value']}>
                  {pointInfo.gauge ? `${pointInfo.gauge} mm` : '—'}
                </div>
              </div>

              <div className={styles['map-panel__detail-item']}>
                <span className={styles['map-panel__detail-label']}>
                  {t('map.railwayRegion')}
                </span>
                <div className={styles['map-panel__detail-value']}>
                  {pointInfo.railwayRegion || '—'}
                </div>
              </div>

              <div className={styles['map-panel__detail-item']}>
                <span className={styles['map-panel__detail-label']}>
                  {t('map.regionAndDistrict')}
                </span>
                <div className={styles['map-panel__detail-value']}>
                  {pointInfo.region && <div>{pointInfo.region}</div>}
                  {pointInfo.district && <div>{pointInfo.district}</div>}
                  {!pointInfo.region && !pointInfo.district && '—'}
                </div>
              </div>

              <div className={styles['map-panel__detail-item']}>
                <span className={styles['map-panel__detail-label']}>
                  {t('map.distanceFromClick')}
                </span>
                <div className={styles['map-panel__detail-value']}>
                  {pointInfo.distanceFromClickMeters} m (
                  {t('map.snappedToTrack')})
                </div>
              </div>

              {pointInfo.osmId && (
                <div className={styles['map-panel__detail-item']}>
                  <span className={styles['map-panel__detail-label']}>
                    {t('map.osmTrack')}
                  </span>
                  <div className={styles['map-panel__detail-value']}>
                    <a
                      href={`https://www.openstreetmap.org/way/${pointInfo.osmId}`}
                      target='_blank'
                      rel='noreferrer'
                      className={styles['map-panel__osm-link']}
                    >
                      #{pointInfo.osmId}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MapPanel;
