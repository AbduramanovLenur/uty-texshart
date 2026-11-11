import { combineReducers } from '@reduxjs/toolkit';

import { reducer as signApplicationModalReducer } from '@features/sign-application-modal';
import { reducer as viewApplicantModalReducer } from '@features/view-applicant-modal';
import { reducer as viewProcessModalReducer } from '@features/view-process-modal';
import { reducer as viewTechnicalSpecificationModalReducer } from '@features/view-technical-specification-modal';

const rootReducer = combineReducers({
  signApplicationModalSlice: signApplicationModalReducer,
  viewApplicantModalSlice: viewApplicantModalReducer,
  viewProcessModalSlice: viewProcessModalReducer,
  viewTechnicalSpecificationModalSlice: viewTechnicalSpecificationModalReducer,
});

export default rootReducer;
