import { createSlice } from '@reduxjs/toolkit';

import type { IState } from '../types/state';

const initialState: IState = {
  isOpen: false,
};

const slice = createSlice({
  name: 'registerTermsModalSlice',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },

    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = slice.actions;
export const reducer = slice.reducer;

export const stateModal = (state: {
  registerTermsModalSlice: IState;
}) => state.registerTermsModalSlice;
