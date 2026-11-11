import { PHONE_DIGITS_LENGTH } from '../../constants/register';

export const extractDigits = (value?: string): string => {
  if (!value) {
    return '';
  }

  return value.replace(/\D/g, '');
};

export const formatUzPhone = (value: string): string => {
  const digits = extractDigits(value).slice(0, PHONE_DIGITS_LENGTH);
  const parts = [
    digits.slice(0, 2),
    digits.slice(2, 5),
    digits.slice(5, 7),
    digits.slice(7, 9),
  ].filter(Boolean);

  return parts.join(' ');
};

export const maskPhoneTail = (phone?: string): string => {
  const digits = extractDigits(phone);

  if (digits.length < 4) {
    return '**9999';
  }

  return `**${digits.slice(-4)}`;
};
