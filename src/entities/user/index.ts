export { default as UserInfo } from './ui/user-info';
export { default as UserDocuments } from './ui/user-documents';
export { default as UserStatusTag, UserStatusTag as UserStatusTagNamed } from './ui/user-status-tag';
export { default as UserDetailsCard } from './ui/user-details-card';

export { userMock, applicantMock, mockUserDetails, defaultUserDetails, getUserDetailsById } from './model/mock';
export { UserStatuses } from './model/constants/user-statuses';
export { userStatusTagConfig } from './model/config/user-status';
export type { IUser, IUserFile, IUserDocuments, IUserTableRow, IUserDetails } from './model/types/user';
export type { TUserStatus, IUserStatusTagConfig } from './model/types/user-status';
