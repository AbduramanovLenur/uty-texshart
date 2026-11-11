import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IState } from '../types/state';

const initialState: IState = {
  isOpen: false,
  documentUrl: null,
};

const slice = createSlice({
  name: 'registerTermsModalSlice',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<string | null | undefined>) => {
      state.isOpen = true;
      state.documentUrl = action.payload ?? null;
    },

    close: (state) => {
      state.isOpen = false;
      state.documentUrl = null;
    },
  },
});

export const { open, close } = slice.actions;
export const reducer = slice.reducer;

export const stateRegisterTermsModal = (state: {
  registerTermsModalSlice: IState;
}) => state.registerTermsModalSlice;
