# Пример Code Review: Антипаттерны vs Эталонный код

### ❌ ПЛОХОЙ КОД (Нарушения чек-листа):
```tsx
// 1. Обычный TS enum (запрещено erasableSyntaxOnly)
export enum Status {
  Active = 'ACTIVE',
  Draft = 'DRAFT'
}

// 2. Использование any
export const BadComponent = ({ data }: any) => {
  const [open, setOpen] = useState(false);

  return (
    // 3. Инлайн-действие в JSX, прямое изменение стейта
    <button onClick={() => setOpen(true)}>
      {/* 4. Хардкод русской строки без i18n */}
      Открыть
    </button>
  );
};
```

---

### ✅ ЭТАЛОННЫЙ КОД (Соответствует 100% стандартов):
```tsx
import type { FC } from 'react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { openModal } from '@features/example-modal';

// 1. Все типы предметной области импортируются из model/types:
import type { TStatus } from '../model/types/status';

// 2. В файле компонента разрешён ИСКЛЮЧИТЕЛЬНО интерфейс собственных пропсов IProps:
interface IProps {
  itemId: string;
  status?: TStatus;
}

export const GoodComponent: FC<IProps> = ({ itemId, status }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  // 3. Вынос действия в именованную функцию с префиксом handle...
  const handleOpenModal = () => {
    dispatch(openModal({ id: itemId }));
  };

  return (
    // 4. Одинарные кавычки, чистая ссылка на handleOpenModal, i18n перевод
    <Button type='primary' onClick={handleOpenModal}>
      {t('actions.open')}
    </Button>
  );
};
```
    </Button>
  );
};
```
