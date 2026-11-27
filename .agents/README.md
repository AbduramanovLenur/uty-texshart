# Frontend Agent Skills

Каталог универсальных специализированных скилов для кодовых агентов (Antigravity App, Antigravity CLI, Antigravity IDE, OpenCode).
Скилы настроены на основе современной масштабируемой архитектуры: **React 19 + TypeScript 6 (`erasableSyntaxOnly`) + FSD + Ant Design v6 + Redux Toolkit + SCSS Modules**.

## Структура каталога

```text
.agents/
├── README.md
└── skills/
    ├── typescript/            # Const-enums (as const), префиксы T/I, erasableSyntaxOnly, type-only imports
    ├── fsd/                   # Feature-Sliced Design, boundaries, Public API (index.ts), анатомия слайса
    ├── react/                 # React 19, React Compiler правила, FC-типизация, JSX кавычки
    ├── antd-forms/            # FormFields связка, useForm, валидаторы, кастомные контролы
    ├── antd-modals/           # Модалки через Redux Toolkit (open/close), rootStore, destroyOnHidden
    ├── state-management/      # 4-уровневый стейт (Redux UI, Form useForm, URL State, Domain Mock)
    ├── tables-and-actions/    # Таблицы, typed columns.tsx, Paginator, фильтры и панели кнопок
    ├── scss/                  # SCSS Modules, BEM, classnames (cn), глобальные лейауты, Antd CSS vars
    ├── mock-architecture/     # Автономные моки model/mock.ts, simulateAsync для работы без бэкенда
    ├── i18n/                  # Локализация react-i18next, ru/uz, нулевой хардкод строк
    ├── assets-and-icons/      # SVG Sprite пайплайн, React-обертки иконок, @shared/assets
    └── code-review/           # Чек-лист проверки качества кода (100% соответствие проекту)
```

## Как работают скилы
Каждый скил оформлен в строгом соответствии со стандартом Antigravity:
```text
skill-name/
├── SKILL.md       # Обязательные инструкции и YAML-метаданные
├── examples/      # Практические примеры кода
└── resources/     # Шаблоны или схемы
```

Агенты автоматически загружают эти инструкции при решении задач в репозитории, гарантируя идеальное качество кода от 0 до 100%.
