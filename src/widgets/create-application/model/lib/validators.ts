import type { RuleObject } from 'antd/es/form';
import type { TFunction } from 'i18next';

export const validateLocationPhotos = (t: TFunction) => {
  return (_: RuleObject, value: unknown): Promise<void> => {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return Promise.reject(
        new Error(t('createApplication.form.validation.locationPhotos')),
      );
    }
    return Promise.resolve();
  };
};

export const validateCoordinates = (t: TFunction) => {
  return (_: RuleObject, value: unknown): Promise<void> => {
    if (
      !value ||
      !Array.isArray(value) ||
      value.length !== 2 ||
      typeof value[0] !== 'number' ||
      typeof value[1] !== 'number' ||
      Number.isNaN(value[0]) ||
      Number.isNaN(value[1])
    ) {
      return Promise.reject(
        new Error(t('createApplication.form.validation.coordinates')),
      );
    }
    return Promise.resolve();
  };
};
