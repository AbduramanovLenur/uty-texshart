import type { FC } from 'react';

import { Map } from '@features/map';

import styles from './incoming-application-map.module.scss';

const DEFAULT_APPLICATION_COORDINATES: [number, number] = [
  39.215561, 65.217753,
];

interface IProps {
  coordinates?: [number, number] | null;
}

const IncomingApplicationMap: FC<IProps> = ({ coordinates = DEFAULT_APPLICATION_COORDINATES }) => (
  <div className={styles['incoming-application-map']}>
    <Map defaultValue={coordinates} readOnly />
  </div>
);

export default IncomingApplicationMap;
