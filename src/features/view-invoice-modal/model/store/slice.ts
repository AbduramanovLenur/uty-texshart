import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IOpenPayload, IState } from '../types/state';

const initialState: IState = {
  isOpen: false,
  id: null,
  url: null,
};

const slice = createSlice({
  name: 'viewInvoiceModalSlice',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<IOpenPayload | undefined>) => {
      state.isOpen = true;
      state.url = action.payload?.url ?? null;
      state.id = action.payload?.id ?? null;
    },
    close: (state) => {
      state.isOpen = false;
      state.url = null;
    },
  },
});

export const { open, close } = slice.actions;
export const reducer = slice.reducer;

export const stateModal = (state: {
  viewInvoiceModalSlice: IState;
}) => state.viewInvoiceModalSlice;
