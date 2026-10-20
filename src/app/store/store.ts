import { configureStore } from '@reduxjs/toolkit';

import { default as rootReducer } from './rootStore';

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
