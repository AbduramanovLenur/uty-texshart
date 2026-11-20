import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IOpenPayload, IState } from '../types/state';

const initialState: IState = {
  isOpen: false,
  id: null,
  key: null,
};

const slice = createSlice({
  name: 'allowConstructionModalSlice',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<IOpenPayload | undefined>) => {
      state.isOpen = true;
      state.id = action.payload?.id ?? null;
      state.key = action.payload?.key ?? null;
    },
    close: (state) => {
      state.isOpen = false;
      state.id = null;
      state.key = null;
    },
  },
});

export const { open, close } = slice.actions;
export const reducer = slice.reducer;

export const stateAllowConstructionModal = (state: {
  allowConstructionModalSlice: IState;
}) => state.allowConstructionModalSlice;
