import type { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import styles from './application-map.module.scss';
import 'leaflet/dist/leaflet.css';

const ApplicationMap: FC = () => {
  return (
    <div className={styles['application-map']}>
      <MapContainer
        center={[41.2995, 69.2401]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </div>
  );
};

export default ApplicationMap;
