---
name: assets-and-icons
description: SVG Sprite asset pipeline, custom typed icon components, and shared/assets re-export conventions.
---

# SVG Sprites & Asset Pipeline

## 1. Концепция иконки через SVG Sprite
В проекте иконки не импортируются как сырые `.svg` файлы в компоненты. Все иконки собраны в глобальный SVG-спрайт: `/images/svg/sprite.svg`.

Каждая иконка оформляется как независимый React-компонент в `src/shared/assets/icons/`:

```tsx
// src/shared/assets/icons/icon-example.tsx
import type { FC } from 'react';

const IconExample: FC = () => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16'>
      <use href='/images/svg/sprite.svg#icon-example' />
    </svg>
  );
};

export default IconExample;
```

## 2. Правила именования
- Имя файла: `icon-<kebab-case>.tsx` (например `icon-arrow-down-to-bracket.tsx`, `icon-check.tsx`).
- Имя компонента: `Icon<PascalCase>` (например `IconArrowDownToBracket`, `IconCheck`).
- ID в спрайте: `#icon-<kebab-case>`.

## 3. Реэкспорт через `@shared/assets`
Все иконки обязаны экспортироваться через `src/shared/assets/index.ts`:
```ts
export { default as IconDownArrow } from './icons/icon-down-arrow';
export { default as IconCheck } from './icons/icon-check';
export { default as IconExample } from './icons/icon-example';
```

В компонентах импортируются строго из `@shared/assets`:
```tsx
import { IconDownArrow, IconCheck } from '@shared/assets';
```
