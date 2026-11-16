import { useTranslation } from 'react-i18next';

import { languages } from '@shared/config';
import type { ILanguageOption } from '@shared/types';

export const useHeaderLanguageOptions = (): ILanguageOption[] => {
  const { t } = useTranslation();

  return languages.map((language) => ({
    label: t(`language.${language}Short`),
    value: language,
  }));
};
