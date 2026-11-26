import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { MapTileType } from '../constants/map-tile-type';
import { defaultMapLayerFilters } from '../config/layer-filters';
import type { IState } from '../types/state';
import type { TMapTileType } from '../types/map-type';
import type { IMapLayerFilters } from '../types/layer-filters';

const initialState: IState = {
  tileType: MapTileType.STREET,
  selectedRegion: undefined,
  layerFilters: defaultMapLayerFilters,
};

const slice = createSlice({
  name: 'mapSlice',
  initialState,
  reducers: {
    setTileType: (state, action: PayloadAction<TMapTileType>) => {
      state.tileType = action.payload;
    },
    setSelectedRegion: (state, action: PayloadAction<string | undefined>) => {
      state.selectedRegion = action.payload;
    },
    setLayerFilters: (state, action: PayloadAction<IMapLayerFilters>) => {
      state.layerFilters = action.payload;
    },
    resetMapState: () => initialState,
  },
});

export const {
  setTileType,
  setSelectedRegion,
  setLayerFilters,
  resetMapState,
} = slice.actions;
export const reducer = slice.reducer;

export const stateMap = (state: { mapSlice: IState }) => state.mapSlice;
