import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { ReferenceDataTypes } from '../constants/reference-data-types';
import type { IOpenPayload, IState } from '../types/state';

const initialState: IState = {
  isOpen: false,
  referenceType: ReferenceDataTypes.COMMUNICATION_TYPES,
  id: null,
};

const slice = createSlice({
  name: 'referenceDataModalSlice',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<IOpenPayload | undefined>) => {
      state.isOpen = true;
      state.referenceType = action.payload?.referenceType ?? ReferenceDataTypes.COMMUNICATION_TYPES;
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

export const stateReferenceDataModal = (state: { referenceDataModalSlice: IState; }) => state.referenceDataModalSlice;
