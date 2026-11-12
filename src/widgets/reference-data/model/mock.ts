import type { ICommunicationType } from './types/communication-type';

export const mockCommunicationTypes: ICommunicationType[] = [
  {
    id: 1,
    name: 'Elektr kabeli',
    isActive: true,
  },
  {
    id: 2,
    name: 'Havo elektr uzatish liniyasi',
    isActive: true,
  },
  {
    id: 3,
    name: 'Gaz quvuri',
    isActive: true,
  },
  {
    id: 4,
    name: 'Suv quvuri',
    isActive: false,
  },
  {
    id: 5,
    name: 'Kanalizatsiya quvuri',
    isActive: true,
  },
  {
    id: 6,
    name: 'Issiqlik tarmog‘i',
    isActive: true,
  },
  {
    id: 7,
    name: 'Aloqa kabeli (mis)',
    isActive: true,
  },
  {
    id: 8,
    name: 'Optik tolali aloqa kabeli',
    isActive: true,
  },
  {
    id: 9,
    name: 'Neft / neft mahsulotlari quvuri',
    isActive: true,
  },
  {
    id: 10,
    name: 'Boshqa muhandislik tarmog‘i',
    isActive: true,
  },
];
