import { combineReducers } from '@reduxjs/toolkit';

import { reducer as createUserModalReducer } from '@features/create-user-modal';
import { reducer as registerTermsModalReducer } from '@features/register-terms-modal';
import { reducer as signApplicationModalReducer } from '@features/sign-application-modal';
import { reducer as viewApplicantModalReducer } from '@features/view-applicant-modal';
import { reducer as viewInvoiceModalReducer } from '@features/view-invoice-modal';
import { reducer as viewProcessModalReducer } from '@features/view-process-modal';
import { reducer as viewTechnicalSpecificationModalReducer } from '@features/view-technical-specification-modal';

const rootReducer = combineReducers({
  createUserModalSlice: createUserModalReducer,
  registerTermsModalSlice: registerTermsModalReducer,
  signApplicationModalSlice: signApplicationModalReducer,
  viewApplicantModalSlice: viewApplicantModalReducer,
  viewInvoiceModalSlice: viewInvoiceModalReducer,
  viewProcessModalSlice: viewProcessModalReducer,
  viewTechnicalSpecificationModalSlice: viewTechnicalSpecificationModalReducer,
});

export default rootReducer;
