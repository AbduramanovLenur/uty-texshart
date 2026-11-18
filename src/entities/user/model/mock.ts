import type { IUser, IUserDetails } from './types/user';

export const userMock: IUser = {
  id: '1',
  name: 'New World MCHJ',
  inn: '3455 6546',
  director: "Hamidov Rashid Yo'ldoshevich",
  phone: '+99899 888 77 22',
  address: "Buxoro viloyati, Buxoro shaxri, Turkiston ko'chasi 44/12",
  idCard: {
    name: 'ID karta',
    size: '3.4 MB',
    url: '#',
  },
  license: {
    name: 'Tadbirkorlik litsenziyasi',
    size: '1.2 MB',
    url: '#',
  },
  avatar: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=300&auto=format&fit=crop',
};

export const applicantMock = userMock;

export const mockUserDetails: Record<string | number, IUserDetails> = {
  1: {
    id: '1',
    name: 'Azizbek Tashkentov',
    pinfl: '6766 7787 5566 1234 34',
    fullName: 'Azizbek Tashkentov Ahmad o‘g‘li',
    phone: '+99899 888 88 22',
    regionalDepartment: 'Qarshi',
    role: 'Hududiy bo‘lim boshlig‘i',
    position: 'Bo‘lim boshlig‘i',
    email: 'myemail@mail.com',
    comment: 'Telegram: @shraxmatov',
  },
};

export const defaultUserDetails: IUserDetails = mockUserDetails[1];

export const getUserDetailsById = (id?: string): IUserDetails => {
  if (id && mockUserDetails[id]) {
    return mockUserDetails[id];
  }
  return defaultUserDetails;
};

