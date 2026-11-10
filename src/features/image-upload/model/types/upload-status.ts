import type { UploadStatus } from '../constants/status';

export type TUploadStatus = (typeof UploadStatus)[keyof typeof UploadStatus];
