import { useTranslation } from 'react-i18next';

import { languages } from '@shared/config';
import type { ILanguageOption } from '@shared/types';

export const useLanguageOptions = (): ILanguageOption[] => {
  const { t } = useTranslation();

  return languages.map((language) => ({
    label: t(`language.${language}`),
    value: language,
  }));
};
