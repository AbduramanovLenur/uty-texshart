import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { IState } from '../types/state';

const initialState: IState = {
  isOpen: false,
  technicalSpecificationId: null,
};

const slice = createSlice({
  name: 'viewTechnicalSpecificationModalSlice',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<string | null>) => {
      state.isOpen = true;
      state.technicalSpecificationId = action.payload;
    },

    close: (state) => {
      state.isOpen = false;
      state.technicalSpecificationId = null;
    },
  },
});

export const { open, close } = slice.actions;
export const reducer = slice.reducer;

export const stateViewTechnicalSpecificationModal = (state: {
  viewTechnicalSpecificationModalSlice: IState;
}) => state.viewTechnicalSpecificationModalSlice;
