import type { RuleObject } from 'antd/es/form';
import type { TFunction } from 'i18next';

import { PHONE_DIGITS_LENGTH } from '../../constants/register';
import { extractDigits } from '../utils/phone';

export const validatePhone = (t: TFunction) => {
  return (_: RuleObject, value: unknown): Promise<void> => {
    const digits = extractDigits(typeof value === 'string' ? value : undefined);

    if (!digits) {
      return Promise.reject(new Error(t('register.validation.phoneRequired')));
    }

    if (digits.length < PHONE_DIGITS_LENGTH) {
      return Promise.reject(new Error(t('register.validation.phoneInvalid')));
    }

    return Promise.resolve();
  };
};

export const validateAgreement = (t: TFunction) => {
  return (_: RuleObject, value: unknown): Promise<void> => {
    if (value !== true) {
      return Promise.reject(new Error(t('register.validation.agreed')));
    }

    return Promise.resolve();
  };
};
