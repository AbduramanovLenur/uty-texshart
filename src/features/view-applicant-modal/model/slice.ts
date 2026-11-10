import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IState } from './types';

const initialState: IState = {
  isOpen: false,
  userId: null,
};

const slice = createSlice({
  name: 'viewApplicantModalSlice',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<number | string | null>) => {
      state.isOpen = true;
      state.userId = action.payload;
    },

    close: (state) => {
      state.isOpen = false;
      state.userId = null;
    },
  },
});

export const { open, close } = slice.actions;
export const reducer = slice.reducer;

export const stateViewApplicantModal = (state: { viewApplicantModalSlice: IState }) => state.viewApplicantModalSlice;
