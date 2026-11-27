# Пример эталонного React 19 компонента

В примере показаны:
1. Типизация функционального компонента через `FC<IProps>`.
2. Строгий вынос всех действий в именованные функции с префиксом `handle...` (нулевой инлайн-код в JSX).
3. Одинарные кавычки в JSX (`type='primary'`).
4. Применение `classnames` (`cn`) со SCSS-модулем.
5. Интернационализация через `useTranslation`.

```tsx
import type { FC, ReactNode, ChangeEvent } from 'react';
import { useState } from 'react';
import { Input, Button, Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import cn from 'classnames';

import { openModal } from '@features/example-modal';
import styles from './user-profile-card.module.scss';

interface IProps {
  userId: string;
  className?: string;
  extraSlot?: ReactNode;
}

export const UserProfileCard: FC<IProps> = ({ userId, className, extraSlot }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState<string>('general');
  const [searchValue, setSearchValue] = useState<string>('');

  // 1. Все обработчики объявляются заранее с префиксом handle...
  const handleTabChange = (key: string) => {
    setActiveTab(key);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleOpenEditModal = () => {
    dispatch(openModal({ id: userId }));
  };

  // 2. В JSX передаются строго чистые ссылки на handle... функции
  return (
    <div className={cn(styles['user-profile-card'], className)}>
      <div className={cn(styles['user-profile-card__header'])}>
        <Tabs
          activeKey={activeTab}
          onChange={handleTabChange}
          items={[
            { key: 'general', label: t('profile.tabs.general') },
            { key: 'security', label: t('profile.tabs.security') },
          ]}
        />
        {extraSlot}
      </div>

      <div className={cn(styles['user-profile-card__body'])}>
        <Input
          placeholder={t('placeholders.search')}
          value={searchValue}
          onChange={handleSearchChange}
        />
        <Button
          type='primary'
          onClick={handleOpenEditModal}
        >
          {t('actions.edit')}
        </Button>
      </div>
    </div>
  );
};

export default UserProfileCard;
```
