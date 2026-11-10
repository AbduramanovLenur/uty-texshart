import { useState, type FC } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import type { GeoJsonObject } from 'geojson';

import {
  mapDefaultCenter,
  mapDefaultZoom,
  mapTileLayer,
} from '../model/config/map';
import {
  railwayRegionStyle,
  regionLayerStyle,
} from '../model/config/layer-styles';
import { focusPointZoom } from '../model/constants/zoom';
import { regionsData, railwayRegionsData } from '../model/data';
import { isValidCoords } from '../model/lib/utils/is-valid-coords';

import TracksLayer from './tracks-layer';
import StationsLayer from './stations-layer';
import SelectedMarker from './selected-marker';
import MapFocus from './map-focus';
import MapClickHandler from './map-click-handler';
import MapResizeHandler from './map-resize-handler';

import styles from './map.module.scss';
import 'leaflet/dist/leaflet.css';

interface IProps {
  value?: [number, number] | null;
  defaultValue?: [number, number] | null;
  onChange?: (coordinates: [number, number]) => void;
  readOnly?: boolean;
}

const Map: FC<IProps> = ({
  value,
  defaultValue = null,
  onChange,
  readOnly = false,
}) => {
  const [internalPoint, setInternalPoint] = useState<[number, number] | null>(
    defaultValue,
  );

  const rawPoint = value !== undefined ? value : internalPoint;
  const selectedPoint = isValidCoords(rawPoint) ? rawPoint : null;

  const handleSelectPoint = (coordinates: [number, number]) => {
    if (!isValidCoords(coordinates)) {
      return;
    }
    if (value === undefined) {
      setInternalPoint(coordinates);
    }
    onChange?.(coordinates);
  };

  const initialCenter = selectedPoint || mapDefaultCenter;
  const initialZoom = selectedPoint ? focusPointZoom : mapDefaultZoom;

  return (
    <div className={styles['map']}>
      <MapContainer
        center={initialCenter}
        zoom={initialZoom}
        scrollWheelZoom
        dragging
        zoomControl
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution={mapTileLayer.attribution}
          url={mapTileLayer.url}
        />

        <MapResizeHandler />
        <MapFocus coords={selectedPoint} />
        <MapClickHandler
          onSelectPoint={handleSelectPoint}
          readOnly={readOnly}
        />

        <GeoJSON
          data={regionsData as GeoJsonObject}
          style={() => regionLayerStyle}
        />
        <GeoJSON
          data={railwayRegionsData as GeoJsonObject}
          style={() => railwayRegionStyle}
        />

        <TracksLayer
          onSelectPoint={handleSelectPoint}
          readOnly={readOnly}
        />
        <StationsLayer
          onSelectPoint={handleSelectPoint}
          readOnly={readOnly}
        />

        {selectedPoint && <SelectedMarker position={selectedPoint} />}
      </MapContainer>
    </div>
  );
};

export default Map;
