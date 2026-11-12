import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IOpenPayload, IState } from '../types/state';

const initialState: IState = {
  isOpen: false,
  id: null,
};

const slice = createSlice({
  name: 'viewProcessModalSlice',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<IOpenPayload | null>) => {
      state.isOpen = true;
      state.id = action.payload?.id ?? null;
    },
    close: (state) => {
      state.isOpen = false;
      state.id = null;
    },
  },
});

export const { open, close } = slice.actions;
export const reducer = slice.reducer;

export const stateViewProcessModal = (state: { viewProcessModalSlice: IState }) => state.viewProcessModalSlice;
