import { useState, type FC } from 'react';
import { GeoJSON, Popup, useMap } from 'react-leaflet';
import type { GeoJsonObject } from 'geojson';
import type { Layer, LeafletMouseEvent } from 'leaflet';

import { railwayTracksData } from '../model/data';
import {
  TRACK_LAYER_STYLE,
  TRACK_HITBOX_STYLE,
  TRACK_CLICK_ZOOM,
} from '../model/constants';
import type { ITrackProperties } from '../model/types';
import { snapToNearestRailway } from '../model/railway-proximity';

import TrackPopup from './track-popup';
import styles from './map.module.scss';

interface IHoveredTrack {
  position: [number, number];
  properties: ITrackProperties;
}

interface IProps {
  onSelectPoint?: (coords: [number, number]) => void;
  readOnly?: boolean;
}

const TracksLayer: FC<IProps> = ({ onSelectPoint, readOnly = false }) => {
  const map = useMap();
  const [hoveredTrack, setHoveredTrack] = useState<IHoveredTrack | null>(null);

  const handleTrackHover = (
    properties: ITrackProperties,
    event: LeafletMouseEvent,
  ) => {
    setHoveredTrack({
      position: [event.latlng.lat, event.latlng.lng],
      properties,
    });
  };

  const handleTrackLeave = () => {
    setHoveredTrack(null);
  };

  const handleTrackClick = (event: LeafletMouseEvent) => {
    const rawCoords: [number, number] = [
      event.latlng.lat,
      event.latlng.lng,
    ];
    const snappedCoords = snapToNearestRailway(rawCoords);

    if (!readOnly && onSelectPoint) {
      onSelectPoint(snappedCoords);
    }

    const currentZoom = map.getZoom();
    const targetZoom = Math.max(currentZoom, TRACK_CLICK_ZOOM);
    map.flyTo(snappedCoords, targetZoom, { duration: 0.8 });
  };

  const bindTrackEvents = (layer: Layer, properties: ITrackProperties) => {
    layer.on({
      mouseover: (event: LeafletMouseEvent) => {
        handleTrackHover(properties, event);
      },
      mouseout: () => {
        handleTrackLeave();
      },
      click: (event: LeafletMouseEvent) => {
        handleTrackClick(event);
      },
    });
  };

  return (
    <>
      <GeoJSON
        data={railwayTracksData as GeoJsonObject}
        style={() => ({
          ...TRACK_LAYER_STYLE,
          interactive: true,
        })}
        onEachFeature={(feature, layer: Layer) => {
          bindTrackEvents(layer, (feature.properties || {}) as ITrackProperties);
        }}
      />

      <GeoJSON
        data={railwayTracksData as GeoJsonObject}
        style={() => ({
          ...TRACK_HITBOX_STYLE,
          className: styles['map__track-hitbox'],
        })}
        onEachFeature={(feature, layer: Layer) => {
          bindTrackEvents(layer, (feature.properties || {}) as ITrackProperties);
        }}
      />

      {hoveredTrack && (
        <Popup
          position={hoveredTrack.position}
          closeButton={false}
          autoPan={false}
          offset={[0, -10]}
          className={styles['map__track-popup']}
        >
          <TrackPopup
            properties={hoveredTrack.properties}
            coordinates={hoveredTrack.position}
          />
        </Popup>
      )}
    </>
  );
};

export default TracksLayer;
