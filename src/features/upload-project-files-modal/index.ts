export { default as UploadProjectFilesModal } from './ui/upload-project-files-modal';
export {
  reducer,
  open,
  close,
  stateUploadProjectFilesModal,
} from './model/store/slice';
export type { IUploadProjectFilesFormValues } from './model/types/form';
export type { IState, IOpenPayload } from './model/types/state';
