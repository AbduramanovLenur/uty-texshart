export const printFile = (url?: string): void => {
  if (!url || url === '#') return;

  const printWindow = window.open(url, '_blank');

  if (!printWindow) {
    return;
  }

  printWindow.addEventListener('load', () => {
    printWindow.print();
  });
};
