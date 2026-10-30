import type { uploadStatus } from './status';

export type UploadStatus = (typeof uploadStatus)[keyof typeof uploadStatus];
