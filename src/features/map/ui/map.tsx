import { useState, type FC } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import type { GeoJsonObject } from 'geojson';

import {
  MAP_DEFAULT_CENTER,
  MAP_DEFAULT_ZOOM,
  MAP_TILE_LAYER,
  REGION_LAYER_STYLE,
  RAILWAY_REGION_STYLE,
} from '../model/constants';
import { regionsData, railwayRegionsData } from '../model/data';

import TracksLayer from './tracks-layer';
import StationsLayer from './stations-layer';
import SelectedMarker from './selected-marker';
import MapFocus from './map-focus';
import MapClickHandler from './map-click-handler';

import styles from './map.module.scss';
import 'leaflet/dist/leaflet.css';

interface IProps {
  value?: [number, number] | null;
  defaultValue?: [number, number] | null;
  onChange?: (coordinates: [number, number]) => void;
  readOnly?: boolean;
}

const defaultChangeHandler = (coordinates: [number, number]) => {
  console.log('Selected coordinates:', coordinates);
};

const Map: FC<IProps> = ({
  value,
  defaultValue = null,
  onChange = defaultChangeHandler,
  readOnly = false,
}) => {
  const [internalPoint, setInternalPoint] = useState<[number, number] | null>(
    defaultValue,
  );

  const selectedPoint = value !== undefined ? value : internalPoint;

  const handleSelectPoint = (coordinates: [number, number]) => {
    if (value === undefined) {
      setInternalPoint(coordinates);
    }
    onChange?.(coordinates);
  };

  const initialCenter = selectedPoint || MAP_DEFAULT_CENTER;
  const initialZoom = selectedPoint ? 14 : MAP_DEFAULT_ZOOM;

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
          attribution={MAP_TILE_LAYER.attribution}
          url={MAP_TILE_LAYER.url}
        />

        <MapFocus coords={selectedPoint} />
        <MapClickHandler
          onSelectPoint={handleSelectPoint}
          readOnly={readOnly}
        />

        <GeoJSON
          data={regionsData as GeoJsonObject}
          style={() => REGION_LAYER_STYLE}
        />
        <GeoJSON
          data={railwayRegionsData as GeoJsonObject}
          style={() => RAILWAY_REGION_STYLE}
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
