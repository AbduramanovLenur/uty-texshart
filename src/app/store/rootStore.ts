import { combineReducers } from '@reduxjs/toolkit';

import { reducer as allowConstructionModalReducer } from '@features/allow-construction-modal';
import { reducer as assignEmployeeModalReducer } from '@features/assign-employee-modal';
import { reducer as confirmActModalReducer } from '@features/confirm-act-modal';
import { reducer as createRoleModalReducer } from '@features/create-role-modal';
import { reducer as createUserModalReducer } from '@features/create-user-modal';
import { reducer as forwardApplicationModalReducer } from '@features/forward-application-modal';
import { reducer as mtuAndCompaniesModalReducer } from '@features/mtu-and-companies-modal';
import { reducer as referenceDataModalReducer } from '@features/reference-data-modal';
import { reducer as registerTermsModalReducer } from '@features/register-terms-modal';
import { reducer as rejectApplicationModalReducer } from '@features/reject-application-modal';
import { reducer as signApplicationModalReducer } from '@features/sign-application-modal';
import { reducer as uploadConstructionActModalReducer } from '@features/upload-construction-act-modal';
import { reducer as uploadProjectFilesModalReducer } from '@features/upload-project-files-modal';
import { reducer as uploadTechSpecModalReducer } from '@features/upload-technical-specification-modal';
import { reducer as viewApplicantModalReducer } from '@features/view-applicant-modal';
import { reducer as viewInvoiceModalReducer } from '@features/view-invoice-modal';
import { reducer as viewPdfModalReducer } from '@features/view-pdf-modal';
import { reducer as viewProcessModalReducer } from '@features/view-process-modal';
import { reducer as viewTechnicalSpecificationModalReducer } from '@features/view-technical-specification-modal';
import { reducer as mapReducer } from '@features/map';

const rootReducer = combineReducers({
  allowConstructionModalSlice: allowConstructionModalReducer,
  assignEmployeeModalSlice: assignEmployeeModalReducer,
  confirmActModalSlice: confirmActModalReducer,
  createRoleModalSlice: createRoleModalReducer,
  createUserModalSlice: createUserModalReducer,
  forwardApplicationModalSlice: forwardApplicationModalReducer,
  mtuAndCompaniesModalSlice: mtuAndCompaniesModalReducer,
  referenceDataModalSlice: referenceDataModalReducer,
  registerTermsModalSlice: registerTermsModalReducer,
  rejectApplicationModalSlice: rejectApplicationModalReducer,
  signApplicationModalSlice: signApplicationModalReducer,
  uploadConstructionActModalSlice: uploadConstructionActModalReducer,
  uploadProjectFilesModalSlice: uploadProjectFilesModalReducer,
  uploadTechSpecModalSlice: uploadTechSpecModalReducer,
  viewApplicantModalSlice: viewApplicantModalReducer,
  viewInvoiceModalSlice: viewInvoiceModalReducer,
  viewPdfModalSlice: viewPdfModalReducer,
  viewProcessModalSlice: viewProcessModalReducer,
  viewTechnicalSpecificationModalSlice: viewTechnicalSpecificationModalReducer,
  mapSlice: mapReducer,
});

export default rootReducer;
