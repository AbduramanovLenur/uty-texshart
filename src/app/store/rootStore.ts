import { combineReducers } from '@reduxjs/toolkit';

import { reducer as viewUserModalReducer } from '@features/view-user-modal';
import { reducer as viewProcessModalReducer } from '@features/view-process-modal';

const rootReducer = combineReducers({
  viewUserModalSlice: viewUserModalReducer,
  viewProcessModalSlice: viewProcessModalReducer,
});

export default rootReducer;
