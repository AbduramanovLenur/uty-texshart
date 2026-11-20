export { default as UploadTechnicalSpecificationModal } from './ui/upload-technical-specification-modal';
export {
  reducer,
  open,
  close,
  stateUploadTechSpecModal,
  stateUploadTechnicalSpecificationModal,
} from './model/store/slice';
export type { IUploadTechSpecFormValues } from './model/types/form';
export type { IState, IOpenPayload } from './model/types/state';
