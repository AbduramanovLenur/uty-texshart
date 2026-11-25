import { useState, type FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import TracksLayer from './tracks-layer';
import StationsLayer from './stations-layer';
import RegionsLayer from './regions-layer';
import RailwayRegionsLayer from './railway-regions-layer';
import SelectedMarker from './selected-marker';
import MapFocus from './map-focus';
import MapRegionFocus from './map-region-focus';
import MapClickHandler from './map-click-handler';
import MapResizeHandler from './map-resize-handler';
import MapPanel from './map-panel';

import { mapDefaultCenter, mapDefaultZoom, mapMaxZoom, mapTileLayers } from '../model/config/map';
import { defaultRegionOptions } from '../model/config/region-options';
import { defaultMapLayerFilters } from '../model/config/layer-filters';
import { defaultStationsWithKm } from '../model/config/stations';
import { MapTileType } from '../model/constants/map-tile-type';
import { FOCUS_POINT_ZOOM } from '../model/constants/zoom';
import { isValidCoords } from '../model/lib/utils/is-valid-coords';
import { snapToNearestRailway } from '../model/lib/utils/railway-proximity';
import { getRailwayPointInfo } from '../model/lib/utils/get-railway-point-info';
import type { TMapTileType } from '../model/types/map-type';
import type { TCoordinates } from '../model/types/coordinates';
import type { IMapLayerFilters } from '../model/types/layer-filters';

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
  const [internalPoint, setInternalPoint] = useState<TCoordinates | null>(defaultValue);
  const [rawClickPoint, setRawClickPoint] = useState<TCoordinates | null>(defaultValue);
  const [internalTileType, setInternalTileType] = useState<TMapTileType>(MapTileType.STREET);
  const [selectedRegion, setSelectedRegion] = useState<string | undefined>(undefined);
  const [layerFilters, setLayerFilters] = useState<IMapLayerFilters>(defaultMapLayerFilters);

  const activeRegionOption = defaultRegionOptions.find((opt) => opt.value === selectedRegion);
  const rawPoint = value !== undefined ? value : internalPoint;
  const selectedPoint = isValidCoords(rawPoint) ? rawPoint : null;
  const pointInfo = selectedPoint ? getRailwayPointInfo(selectedPoint, defaultStationsWithKm, rawClickPoint) : null;
  const activeTileConfig = mapTileLayers[internalTileType];
  const initialCenter = selectedPoint || mapDefaultCenter;
  const initialZoom = selectedPoint ? FOCUS_POINT_ZOOM : mapDefaultZoom;

  const handleRegionChange = (regionId?: string) => {
    setSelectedRegion(regionId);
  };

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

  const handleTileTypeChange = (nextType: TMapTileType) => {
    setInternalTileType(nextType);
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
        <TileLayer
          key={internalTileType}
          attribution={activeTileConfig.attribution}
          url={activeTileConfig.url}
          subdomains={activeTileConfig.subdomains}
          maxZoom={activeTileConfig.maxZoom}
          maxNativeZoom={activeTileConfig.maxNativeZoom}
        />

        {layerFilters.regions && <RegionsLayer />}
        {layerFilters.railwayRegions && <RailwayRegionsLayer />}
        <TracksLayer />
        {layerFilters.stations && (
          <StationsLayer
            stations={defaultStationsWithKm}
            onSelectPoint={handleSelectPoint}
            readOnly={readOnly}
          />
        )}

        <MapResizeHandler />
        <MapFocus coords={selectedPoint} />
        <MapRegionFocus
          bounds={activeRegionOption?.bounds}
          center={activeRegionOption?.center}
          zoom={activeRegionOption?.zoom}
          selectedRegion={selectedRegion}
        />
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
        tileType={internalTileType}
        onChangeTileType={handleTileTypeChange}
        selectedRegion={selectedRegion}
        onChangeRegion={handleRegionChange}
        regionOptions={defaultRegionOptions}
        layerFilters={layerFilters}
        onChangeLayerFilters={setLayerFilters}
      />
    </div>
  );
};

export default Map;
