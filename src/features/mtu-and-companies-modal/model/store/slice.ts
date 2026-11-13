import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { MtuAndCompaniesTypes } from '../constants/mtu-and-companies-types';
import type { IOpenPayload, IState } from '../types/state';

const initialState: IState = {
  isOpen: false,
  type: MtuAndCompaniesTypes.MTU,
  id: null,
};

const slice = createSlice({
  name: 'mtuAndCompaniesModalSlice',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<IOpenPayload | undefined>) => {
      state.isOpen = true;
      state.type = action.payload?.type ?? MtuAndCompaniesTypes.MTU;
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

export const stateMtuAndCompaniesModal = (state: { mtuAndCompaniesModalSlice: IState; }) =>
  state.mtuAndCompaniesModalSlice;
