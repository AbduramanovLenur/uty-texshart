import type { FC } from 'react';

import { Map } from '@features/map';

const TEST_COORDINATES: [number, number] = [41.294663, 69.120467];

const CreateApplicationMap: FC = () => {
  return <Map defaultValue={TEST_COORDINATES} />;
};

export default CreateApplicationMap;
