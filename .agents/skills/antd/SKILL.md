---
name: antd
description: Ant Design implementation standards for React applications, especially tables, forms, filters, modals, popovers, and pagination.
---

# Ant Design Standards

- Reuse existing project wrappers and shared Ant Design components.
- Prefer Ant Design's built-in behavior before custom implementations.
- Keep table column definitions readable and extract them when they become large.
- Keep filter state synchronized with the project's existing query-parameter approach.
- Use controlled components when state must be synchronized with URL or external state.
- Preserve accessible labels and meaningful placeholders.
- Do not override Ant Design globally unless the visual requirement is truly global.
- Prefer scoped class names and :where() when overriding Ant Design styles.
- Do not duplicate Ant Design components in shared UI without a clear reason.
- Handle table loading, empty, error, and pagination states consistently.
