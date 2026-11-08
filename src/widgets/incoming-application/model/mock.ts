import type { IUserDocuments } from '@entities/user';
import type { IPreviewFile } from '@/entities/application';

export const previewFilesMock: IPreviewFile[] = [
  {
    name: 'Joyida o‘rganish dalolatnomasi',
    extensionFile: 'PDF',
    size: '12 MB',
    url: 'https://www.orimi.com/pdf-test.pdf',
  },
  {
    name: 'Texnik shart',
    extensionFile: 'PDF',
    size: '10 MB',
    url: 'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf',
  },
  {
    name: 'Loyiha chizmasi / kesishuv sxemasi',
    extensionFile: 'PDF',
    size: '1 MB',
    url: 'https://axiomabio.com/pdf/test.pdf',
  },
  {
    name: 'Joyida o‘rganish dalolatnomasi',
    extensionFile: 'PDF',
    size: '12 MB',
    url: 'https://www.orimi.com/pdf-test.pdf',
  },
  {
    name: 'Texnik shart',
    extensionFile: 'PDF',
    size: '10 MB',
    url: 'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf',
  },
  {
    name: 'Loyiha chizmasi / kesishuv sxemasi',
    extensionFile: 'PDF',
    size: '1 MB',
    url: 'https://axiomabio.com/pdf/test.pdf',
  },
  {
    name: 'Joyida o‘rganish dalolatnomasi',
    extensionFile: 'PDF',
    size: '12 MB',
    url: 'https://www.orimi.com/pdf-test.pdf',
  },
  {
    name: 'Texnik shart',
    extensionFile: 'PDF',
    size: '10 MB',
    url: 'https://www.rd.usda.gov/sites/default/files/pdf-sample_0.pdf',
  },
  {
    name: 'Loyiha chizmasi / kesishuv sxemasi',
    extensionFile: 'PDF',
    size: '1 MB',
    url: 'https://axiomabio.com/pdf/test.pdf',
  },
];

export const userDocuments: IUserDocuments = {
  passport: {
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_ID_card_front.jpg',
    size: '3.4 MB',
    previews: [
      {
        id: 1,
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_ID_card_front.jpg',
      },
      {
        id: 2,
        url: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_ID_card_back.jpg',
      },
    ],
  },
  license: {
    url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Certificate_sample.jpg',
    size: '1.2 MB',
    preview: 'https://commons.wikimedia.org/wiki/Special:FilePath/Certificate_sample.jpg',
  },
};
