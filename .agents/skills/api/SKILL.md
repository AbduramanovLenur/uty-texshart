---
name: api
description: REST API, Axios, TanStack Query, authentication, validation, and server-state standards.
---

# API Standards

- Keep API request functions separate from presentation components.
- Use TanStack Query for server state when it is already used by the project.
- Keep query keys centralized or consistently structured.
- Define request and response types explicitly.
- Handle HTTP errors in a predictable project-wide way.
- Do not silently swallow API errors.
- Keep authentication/token logic centralized.
- Do not store sensitive tokens in localStorage unless the project explicitly requires it.
- Validate external data at boundaries when necessary.
- For mutations, invalidate or update affected queries deliberately.
- Avoid unnecessary refetches.
- Do not duplicate the same endpoint logic across components.
