export const downloadFile = (url?: string, filename?: string): void => {
  if (!url || url === '#') return;

  const link = document.createElement('a');

  link.href = url;
  link.download = filename || 'download.pdf';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
