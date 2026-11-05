import { combineReducers } from '@reduxjs/toolkit';

import { reducer as viewUserModalReducer } from '@features/view-user-modal';

const rootReducer = combineReducers({
  viewUserModalSlice: viewUserModalReducer,
});

export default rootReducer;
