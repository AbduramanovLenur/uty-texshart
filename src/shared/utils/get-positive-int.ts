import { parsePositiveInt } from './parse-positive-int';

export const getPositiveInt = (value: string | null, fallback: number): number => {
  return parsePositiveInt(value) ?? fallback;
};
