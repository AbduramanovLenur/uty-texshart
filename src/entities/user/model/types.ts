export interface IUserFile {
  name: string;
  size: string;
  url?: string;
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
