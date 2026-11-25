export const copyToClipboard = (text: string) => {
  if (!text || !navigator?.clipboard) {
    return false;
  }

  navigator.clipboard.writeText(text);
};
