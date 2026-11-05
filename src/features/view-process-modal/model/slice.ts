import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IState } from './types';

const initialState: IState = {
  isOpen: false,
  applicationId: null,
};

const slice = createSlice({
  name: 'viewProcessModalSlice',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<number | string | null>) => {
      state.isOpen = true;
      state.applicationId = action.payload;
    },

    close: (state) => {
      state.isOpen = false;
      state.applicationId = null;
    },
  },
});

export const { open, close } = slice.actions;
export const reducer = slice.reducer;

export const stateViewProcessModal = (state: { viewProcessModalSlice: IState }) => state.viewProcessModalSlice;
