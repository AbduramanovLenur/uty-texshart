import type { FC } from 'react';
import { message, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import CoordsInputRow from './coords-input-row';
import MapTypeSegmented from './map-type-segmented';
import MapRegionSelect from './map-region-select';
import type { IRailwayPointInfo } from '../model/types/point-info';
import type { TMapTileType } from '../model/types/map-type';
import type { IRegionOption } from '../model/types/region-option';
import type { TCoordinates } from '../model/types/coordinates';
import { formatCoords } from '../model/lib/utils/format-coords';
import { getCoordsKey } from '../model/lib/utils/get-coords-key';

import { IconFiles, IconRailwayTrack } from '@shared/assets';
import { copyToClipboard } from '@shared/utils';

import styles from './map-panel.module.scss';

interface IProps {
  readOnly?: boolean;
  selectedCoords?: TCoordinates | null;
  pointInfo: IRailwayPointInfo | null;
  onApplyManualCoords: (coords: TCoordinates) => void;
  tileType: TMapTileType;
  onChangeTileType: (tileType: TMapTileType) => void;
  selectedRegion?: string;
  onChangeRegion?: (regionId?: string) => void;
  regionOptions?: IRegionOption[];
}

const MapPanel: FC<IProps> = ({
  readOnly = false,
  selectedCoords,
  pointInfo,
  onApplyManualCoords,
  tileType,
  onChangeTileType,
  selectedRegion,
  onChangeRegion,
  regionOptions,
}) => {
  const { t } = useTranslation();

  const handleCopy = () => {
    if (!selectedCoords) {
      return;
    }

    copyToClipboard(formatCoords(selectedCoords));
    message.success(t('map.copied'));
  };

  const hasPoint = Boolean(selectedCoords && pointInfo);
  const currentCoordsKey = getCoordsKey(selectedCoords);

  return (
    <div className={cn(styles['map-panel'])}>
      <div className={cn(styles['map-panel__overlay'])}>
        <MapTypeSegmented
          value={tileType}
          onChange={onChangeTileType}
        />

        {!readOnly && (
          <MapRegionSelect
            value={selectedRegion}
            onChange={onChangeRegion}
            options={regionOptions}
          />
          )
        }

        <div className={cn(styles['map-panel__header'])}>
          <span className={cn(styles['map-panel__label'])}>
            {t('map.selectedPoint')}
          </span>

          {hasPoint && selectedCoords ? (
            <>
              <div className={cn(styles['map-panel__coords'])}>
                <div className={cn(styles['map-panel__coord-wrapper'])}>
                  <span className={cn(styles['map-panel__coord-value'])}>
                    {selectedCoords[0].toFixed(6)}
                  </span>
                  <span className={cn(styles['map-panel__coord-value'])}>
                    {selectedCoords[1].toFixed(6)}
                  </span>
                </div>
                <Button
                  className={cn(styles['map-panel__copy-btn'])}
                  size='large'
                  onClick={handleCopy}
                >
                  <IconFiles />
                </Button>
              </div>
              <div className={cn(styles['map-panel__dms'])}>
                {pointInfo?.dmsString}
              </div>
            </>
          ) : (
            <div className={cn(styles['map-panel__empty'])}>
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
              <div className={cn(styles['map-panel__station-card'])}>
                <div className={cn(styles['map-panel__track-axis'])}>
                  {pointInfo.topStation && <IconRailwayTrack />}
                  {pointInfo.pointKmInfo && (
                    <div className={cn(styles['map-panel__point-dot'])} />
                  )}
                  {pointInfo.bottomStation && <IconRailwayTrack />}
                </div>

                <div className={cn(styles['map-panel__station-content'])}>
                  {pointInfo.topStation && (
                    <div className={cn(styles['map-panel__station-block'])}>
                      <span className={cn(styles['map-panel__station-name'])}>
                        {pointInfo.topStation.name}
                      </span>
                      <span className={cn(styles['map-panel__station-meta'])}>
                        {t('map.centerLine')} {pointInfo.topStation.km} km{' '}
                        {pointInfo.topStation.pk} pk
                      </span>
                      <span className={cn(styles['map-panel__station-meta'])}>
                        {pointInfo.topStation.distanceKm.toLocaleString('ru-RU')}{' '}
                        km
                      </span>
                    </div>
                  )}

                  {pointInfo.pointKmInfo && (
                    <div className={cn(styles['map-panel__point-km'])}>
                      {pointInfo.pointKmInfo.formatted}
                    </div>
                  )}

                  {pointInfo.bottomStation && (
                    <div className={cn(styles['map-panel__station-block'])}>
                      <span className={cn(styles['map-panel__station-name'])}>
                        {pointInfo.bottomStation.name}
                      </span>
                      <span className={cn(styles['map-panel__station-meta'])}>
                        {t('map.centerLine')} {pointInfo.bottomStation.km} km{' '}
                        {pointInfo.bottomStation.pk} pk
                      </span>
                      <span className={cn(styles['map-panel__station-meta'])}>
                        {pointInfo.bottomStation.distanceKm.toLocaleString('ru-RU')}{' '}
                        km
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className={cn(styles['map-panel__details'])}>
              <div className={cn(styles['map-panel__detail-item'])}>
                <span className={cn(styles['map-panel__detail-label'])}>
                  {t('map.trackName')}
                </span>
                <div className={cn(styles['map-panel__detail-value'])}>
                  {pointInfo.trackName || '—'}
                </div>
              </div>

              <div className={cn(styles['map-panel__detail-item'])}>
                <span className={cn(styles['map-panel__detail-label'])}>
                  {t('map.gauge')}
                </span>
                <div className={cn(styles['map-panel__detail-value'])}>
                  {pointInfo.gauge ? `${pointInfo.gauge} mm` : '—'}
                </div>
              </div>

              <div className={cn(styles['map-panel__detail-item'])}>
                <span className={cn(styles['map-panel__detail-label'])}>
                  {t('map.railwayRegion')}
                </span>
                <div className={cn(styles['map-panel__detail-value'])}>
                  {pointInfo.railwayRegion || '—'}
                </div>
              </div>

              <div className={cn(styles['map-panel__detail-item'])}>
                <span className={cn(styles['map-panel__detail-label'])}>
                  {t('map.regionAndDistrict')}
                </span>
                <div className={cn(styles['map-panel__detail-value'])}>
                  {pointInfo.region && <div>{pointInfo.region}</div>}
                  {pointInfo.district && <div>{pointInfo.district}</div>}
                  {!pointInfo.region && !pointInfo.district && '—'}
                </div>
              </div>

              <div className={cn(styles['map-panel__detail-item'])}>
                <span className={cn(styles['map-panel__detail-label'])}>
                  {t('map.distanceFromClick')}
                </span>
                <div className={cn(styles['map-panel__detail-value'])}>
                  {pointInfo.distanceFromClickMeters} m (
                  {t('map.snappedToTrack')})
                </div>
              </div>

              {pointInfo.osmId && (
                <div className={cn(styles['map-panel__detail-item'])}>
                  <span className={cn(styles['map-panel__detail-label'])}>
                    {t('map.osmTrack')}
                  </span>
                  <div className={cn(styles['map-panel__detail-value'])}>
                    <a
                      href={`https://www.openstreetmap.org/way/${pointInfo.osmId}`}
                      target='_blank'
                      rel='noreferrer'
                      className={cn(styles['map-panel__osm-link'])}
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
