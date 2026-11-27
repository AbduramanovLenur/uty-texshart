# Пример создания и регистрации SVG-иконки

В проекте все иконки используют глобальный SVG-спрайт: `/images/svg/sprite.svg`.

### 1. Компонент иконки (`src/shared/assets/icons/icon-download.tsx`)
```tsx
import type { FC } from 'react';

const IconDownload: FC = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16'>
      <use href='/images/svg/sprite.svg#icon-download' />
    </svg>
  );
};

export default IconDownload;
```

### 2. Реэкспорт в Public API ассетов (`src/shared/assets/index.ts`)
```ts
export { default as IconDownload } from './icons/icon-download';
export { default as IconCheck } from './icons/icon-check';
export { default as IconPlus } from './icons/icon-plus';
```

### 3. Использование в любом компоненте приложения
```tsx
import { Button } from 'antd';
import { IconDownload } from '@shared/assets';

export const DownloadButton: FC = () => {
  const handleDownload = () => {
    // логика скачивания
  };

  return (
    <Button icon={<IconDownload />} onClick={handleDownload}>
      Скачать
    </Button>
  );
};
```
