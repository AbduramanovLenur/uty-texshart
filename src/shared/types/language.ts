import type { languages } from '@shared/config';

export type Language = (typeof languages)[number];

export interface ILanguageOption {
  label: string;
  value: Language;
}
