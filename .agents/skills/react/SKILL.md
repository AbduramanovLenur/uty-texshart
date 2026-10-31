---
name: react
description: React 19 development guidance for components, hooks, state, effects, and React Compiler projects.
---

# React Standards

- Prefer function components.
- Prefer React 19 patterns and let the React Compiler handle optimization where applicable.
- Do not add useCallback or useMemo unless there is a concrete reason.
- Do not use useEffect for derived values that can be calculated during render.
- Avoid effects for event-driven logic; put that logic in event handlers.
- Keep component APIs small and explicit.
- Extract reusable UI only when reuse or complexity justifies it.
- Keep server/API state separate from local UI state.
- Avoid prop drilling when a feature-level composition pattern is cleaner.
- Preserve stable keys and never use array indexes as keys when items have stable identifiers.
- Handle loading, error, empty, and success states explicitly when applicable.
