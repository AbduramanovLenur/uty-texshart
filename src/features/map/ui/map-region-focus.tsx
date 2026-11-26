import { useEffect, useRef, type FC } from 'react';
import { useMap } from 'react-leaflet';
import { shallowEqual, useSelector } from 'react-redux';

import { getMapView } from '../model/lib/utils/get-map-view';
import type { IState } from '../model/types/state';
import type { IRegionOption } from '../model/types/region-option';

const FLY_DURATION = 1;

interface IProps {
  regionOptions: IRegionOption[];
}

const MapRegionFocus: FC<IProps> = ({ regionOptions }) => {
  const map = useMap();
  const prevRegionRef = useRef<string | undefined>(undefined);
  const { selectedRegion } = useSelector(
    (state: { mapSlice: IState }) => ({
      selectedRegion: state.mapSlice.selectedRegion,
    }),
    shallowEqual,
  );

  const activeRegionOption = regionOptions.find(
    (opt) => opt.value === selectedRegion,
  );

  useEffect(() => {
    if (prevRegionRef.current === selectedRegion) {
      return;
    }

    const size = map.getSize();
    if (size.x === 0 || size.y === 0) {
      return;
    }

    prevRegionRef.current = selectedRegion;

    const view = getMapView(map, {
      bounds: activeRegionOption?.bounds,
      center: activeRegionOption?.center,
      zoom: activeRegionOption?.zoom,
    });
    map.flyTo(view.center, view.zoom, { duration: FLY_DURATION });
  }, [activeRegionOption, selectedRegion, map]);

  return null;
};

export default MapRegionFocus;
