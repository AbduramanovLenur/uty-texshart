export const parsePositiveInt = (value: string | null): number | null => {
  if (value === null || value.trim() === '') {
    return null;
  }

  const parsed = Number(value);

  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
};
