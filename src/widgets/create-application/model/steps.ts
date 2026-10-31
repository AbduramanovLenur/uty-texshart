import type { StepsProps } from 'antd';
import type { TFunction } from 'i18next';

export const getSteps = (t: TFunction): StepsProps['items'] => [
  {
    title: t('createApplication.steps.step1.title'),
    content: t('createApplication.steps.step1.content'),
  },
  {
    title: t('createApplication.steps.step2.title'),
    content: t('createApplication.steps.step2.content'),
  },
];
