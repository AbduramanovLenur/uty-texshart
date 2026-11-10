import type { TUserStatus } from './user-status';

export interface IUserFile {
  name: string;
  size: string;
  url: string;
}

export interface IUserTableRow {
  id: number | string;
  name: string;
  role: string;
  mtu: string;
  pinfl: string;
  status: TUserStatus;
  lastLogin: string;
}

export interface IUser {
  id: number | string;
  name: string;
  inn: string;
  director: string;
  phone: string;
  address: string;
  idCard?: IUserFile;
  license?: IUserFile;
  avatar?: string;
}

export interface IUserPassportItem {
  id: string | number;
  url: string;
}

export interface IUserPassport {
  url: string;
  size: string;
  previews: IUserPassportItem[];
}

export interface IUserLicense {
  url: string;
  size: string;
  preview: string;
}

export interface IUserDocuments {
  passport: IUserPassport;
  license: IUserLicense;
}
