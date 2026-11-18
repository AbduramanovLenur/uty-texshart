export interface IUserFile {
  name: string;
  size: string;
  url: string;
}

export interface IUserInfo {
  id: string;
  name: string;
  role: string;
  mtu: string;
  pinfl: string;
  status: boolean;
  lastLogin: string;
}

export interface IUserDetails {
  id: string;
  name: string;
  pinfl: string;
  fullName: string;
  phone: string;
  regionalDepartment: string;
  role: string;
  position: string;
  email: string;
  comment: string;
}

export interface IUser {
  id: string;
  name: string;
  inn: string;
  director: string;
  phone: string;
  address: string;
  idCard?: IUserFile;
  license?: IUserFile;
  avatar?: string;
}

export interface IUserDocument {
  url: string;
  size: string;
}

export interface IUserDocuments {
  passport: IUserDocument;
  license: IUserDocument;
}
