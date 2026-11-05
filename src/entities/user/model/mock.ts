import type { IUser } from './types';

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
