import type { uploadStatus } from './status';

export type TUploadStatus = (typeof uploadStatus)[keyof typeof uploadStatus];
