import { useState, type FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import TracksLayer from './tracks-layer';
import StationsLayer from './stations-layer';
import RegionsLayer from './regions-layer';
import RailwayRegionsLayer from './railway-regions-layer';
import SelectedMarker from './selected-marker';
import MapFocus from './map-focus';
import MapClickHandler from './map-click-handler';
import MapResizeHandler from './map-resize-handler';
import MapPanel from './map-panel';

import { mapDefaultCenter, mapDefaultZoom, mapMaxZoom, mapTileLayer } from '../model/config/map';
import { FOCUS_POINT_ZOOM } from '../model/constants/zoom';
import { isValidCoords } from '../model/lib/utils/is-valid-coords';
import { snapToNearestRailway } from '../model/lib/utils/railway-proximity';
import { getRailwayPointInfo } from '../model/lib/utils/get-railway-point-info';

import 'leaflet/dist/leaflet.css';
import styles from './map.module.scss';

interface IProps {
  id?: string;
  value?: [number, number] | null;
  defaultValue?: [number, number] | null;
  onChange?: (coordinates: [number, number]) => void;
  readOnly?: boolean;
}

const Map: FC<IProps> = ({
  id,
  value,
  defaultValue = null,
  onChange,
  readOnly = false,
}) => {
  const [internalPoint, setInternalPoint] = useState<[number, number] | null>(
    defaultValue,
  );
  const [rawClickPoint, setRawClickPoint] = useState<[number, number] | null>(
    defaultValue,
  );

  const rawPoint = value !== undefined ? value : internalPoint;
  const selectedPoint = isValidCoords(rawPoint) ? rawPoint : null;

  const handleSelectPoint = (
    coordinates: [number, number],
    rawCoords?: [number, number],
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

  const handleApplyManualCoords = (coords: [number, number]) => {
    handleSelectPoint(snapToNearestRailway(coords), coords);
  };

  const pointInfo = selectedPoint ? getRailwayPointInfo(selectedPoint, rawClickPoint) : null;

  const initialCenter = selectedPoint || mapDefaultCenter;
  const initialZoom = selectedPoint ? FOCUS_POINT_ZOOM : mapDefaultZoom;

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
        <TileLayer
          attribution={mapTileLayer.attribution}
          url={mapTileLayer.url}
          maxZoom={mapTileLayer.maxZoom}
          maxNativeZoom={mapTileLayer.maxNativeZoom}
        />
        <MapResizeHandler />
        <MapFocus coords={selectedPoint} />
        <MapClickHandler
          onSelectPoint={handleSelectPoint}
          readOnly={readOnly}
        />
        <RegionsLayer />
        <RailwayRegionsLayer />
        <TracksLayer />
        <StationsLayer
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
      />
    </div>
  );
};

export default Map;
