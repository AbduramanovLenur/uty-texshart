import type { FC } from 'react';

import { Map } from '@features/map';

import styles from './application-map.module.scss';

const TEST_COORDINATES: [number, number] = [41.294663, 69.120467];

const ApplicationMap: FC = () => {
  return (
    <div className={styles['application-map']}>
      <Map defaultValue={TEST_COORDINATES} readOnly />
    </div>
  );
};

export default ApplicationMap;
