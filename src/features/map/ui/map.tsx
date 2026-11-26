import { useState, type FC } from 'react';
import { MapContainer } from 'react-leaflet';

import TracksLayer from './tracks-layer';
import SelectedMarker from './selected-marker';
import MapFocus from './map-focus';
import MapRegionFocus from './map-region-focus';
import MapClickHandler from './map-click-handler';
import MapResizeHandler from './map-resize-handler';
import MapTileLayer from './map-tile-layer';
import MapRegionLayers from './map-region-layers';
import MapStationsLayer from './map-stations-layer';
import MapPanel from './map-panel';

import {
  mapDefaultCenter,
  mapDefaultZoom,
  mapMaxZoom,
} from '../model/config/map';
import { defaultRegionOptions } from '../model/config/region-options';
import { defaultStationsWithKm } from '../model/config/stations';
import { FOCUS_POINT_ZOOM } from '../model/constants/zoom';
import { isValidCoords } from '../model/lib/utils/is-valid-coords';
import { snapToNearestRailway } from '../model/lib/utils/railway-proximity';
import { getRailwayPointInfo } from '../model/lib/utils/get-railway-point-info';
import type { TCoordinates } from '../model/types/coordinates';

import 'leaflet/dist/leaflet.css';
import styles from './map.module.scss';

interface IProps {
  id?: string;
  value?: TCoordinates | null;
  defaultValue?: TCoordinates | null;
  onChange?: (coordinates: TCoordinates) => void;
  readOnly?: boolean;
}

const Map: FC<IProps> = ({
  id,
  value,
  defaultValue = null,
  onChange,
  readOnly = false,
}) => {
  const [internalPoint, setInternalPoint] = useState<TCoordinates | null>(
    defaultValue,
  );
  const [rawClickPoint, setRawClickPoint] = useState<TCoordinates | null>(
    defaultValue,
  );

  const rawPoint = value !== undefined ? value : internalPoint;
  const selectedPoint = isValidCoords(rawPoint) ? rawPoint : null;
  const pointInfo = selectedPoint
    ? getRailwayPointInfo(selectedPoint, defaultStationsWithKm, rawClickPoint)
    : null;
  const initialCenter = selectedPoint || mapDefaultCenter;
  const initialZoom = selectedPoint ? FOCUS_POINT_ZOOM : mapDefaultZoom;

  const handleSelectPoint = (
    coordinates: TCoordinates,
    rawCoords?: TCoordinates,
  ) => {
    if (!isValidCoords(coordinates)) {
      return;
    }

    setRawClickPoint(rawCoords ?? coordinates);

    if (value === undefined) {
      setInternalPoint(coordinates);
    }

    onChange?.(coordinates);
  };

  const handleApplyManualCoords = (coords: TCoordinates) => {
    handleSelectPoint(snapToNearestRailway(coords), coords);
  };

  return (
    <div id={id} className={styles['map']}>
      <MapContainer
        center={initialCenter}
        zoom={initialZoom}
        maxZoom={mapMaxZoom}
        preferCanvas
        scrollWheelZoom
        dragging
        zoomControl
        doubleClickZoom
        touchZoom
        style={{ width: '100%', height: '100%' }}
      >
        <MapTileLayer />
        <MapRegionLayers />
        <TracksLayer />
        <MapStationsLayer
          onSelectPoint={handleSelectPoint}
          readOnly={readOnly}
        />
        <MapResizeHandler />
        <MapFocus coords={selectedPoint} />
        <MapRegionFocus regionOptions={defaultRegionOptions} />
        <MapClickHandler
          onSelectPoint={handleSelectPoint}
          readOnly={readOnly}
        />
        {selectedPoint && <SelectedMarker position={selectedPoint} />}
      </MapContainer>
      <MapPanel
        readOnly={readOnly}
        selectedCoords={selectedPoint}
        pointInfo={pointInfo}
        onApplyManualCoords={handleApplyManualCoords}
        regionOptions={defaultRegionOptions}
      />
    </div>
  );
};

export default Map;
