export { default as UserInfo } from './ui/user-info';
export { default as UserDocuments } from './ui/user-documents';
export { default as UserStatusTag, UserStatusTag as UserStatusTagNamed } from './ui/user-status-tag';

export { userMock, applicantMock } from './model/mock';
export { UserStatuses } from './model/constants/user-statuses';
export { userStatusTagConfig } from './model/config/user-status';
export type { IUser, IUserFile, IUserDocuments, IUserTableRow } from './model/types/user';
export type { TUserStatus, IUserStatusTagConfig } from './model/types/user-status';
