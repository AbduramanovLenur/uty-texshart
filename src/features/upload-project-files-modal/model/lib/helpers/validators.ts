import type { RuleObject } from 'antd/es/form';
import type { TFunction } from 'i18next';

export const isZipFile = (file: File): boolean => {
  return file.name.toLowerCase().endsWith('.zip');
};

export const validateZipFile = (t: TFunction) => {
  return (_: RuleObject, value: unknown): Promise<void> => {
    if (!value) return Promise.resolve();
    const file = value as File;
    if (!isZipFile(file)) {
      return Promise.reject(
        new Error(t('uploadProjectFilesModal.validation.onlyZip')),
      );
    }
    return Promise.resolve();
  };
};
