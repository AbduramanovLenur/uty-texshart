export const maskPinfl = (pinfl?: string | null): string => {
  if (!pinfl) return '';

  if (pinfl.length <= 4) {
    return pinfl;
  }

  const hidden = pinfl.slice(0, -4);
  const visible = pinfl.slice(-4);

  return hidden.replace(/[^\s]/g, '*') + visible;
};
