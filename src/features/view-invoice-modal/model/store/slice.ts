import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IOpenPayload, IState } from '../types/state';

const initialState: IState = {
  isOpen: false,
  url: null,
};

const slice = createSlice({
  name: 'viewInvoiceModalSlice',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<IOpenPayload | undefined>) => {
      state.isOpen = true;
      state.url = action.payload?.url ?? null;
    },

    close: (state) => {
      state.isOpen = false;
      state.url = null;
    },
  },
});

export const { open, close } = slice.actions;
export const reducer = slice.reducer;

export const stateViewInvoiceModal = (state: { viewInvoiceModalSlice: IState; }) => state.viewInvoiceModalSlice;
