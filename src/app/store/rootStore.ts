import { combineReducers } from '@reduxjs/toolkit';

import { reducer as viewApplicantModalReducer } from '@features/view-applicant-modal';
import { reducer as viewProcessModalReducer } from '@features/view-process-modal';

const rootReducer = combineReducers({
  viewApplicantModalSlice: viewApplicantModalReducer,
  viewProcessModalSlice: viewProcessModalReducer,
});

export default rootReducer;
