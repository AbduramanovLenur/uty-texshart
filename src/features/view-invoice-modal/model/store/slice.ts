import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IState } from '../types/state';

const initialState: IState = {
  isOpen: false,
  invoiceUrl: null,
};

const slice = createSlice({
  name: 'viewInvoiceModalSlice',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<string | null | undefined>) => {
      state.isOpen = true;
      state.invoiceUrl = action.payload ?? null;
    },

    close: (state) => {
      state.isOpen = false;
      state.invoiceUrl = null;
    },
  },
});

export const { open, close } = slice.actions;
export const reducer = slice.reducer;

export const stateViewInvoiceModal = (state: {
  viewInvoiceModalSlice: IState;
}) => state.viewInvoiceModalSlice;
