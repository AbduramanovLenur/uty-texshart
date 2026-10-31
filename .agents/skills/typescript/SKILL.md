---
name: typescript
description: Strict TypeScript standards for safe, maintainable frontend code.
---

# TypeScript Standards

- Prefer precise types over any.
- Never introduce any merely to silence a TypeScript error.
- Use unknown for genuinely unknown external data and narrow it safely.
- Prefer discriminated unions for mutually exclusive states.
- Type API responses explicitly.
- Avoid unnecessary type assertions.
- Prefer type inference for obvious local values.
- Use interfaces or type aliases consistently with the existing project style.
- Keep domain types close to the domain that owns them.
- Validate external data before trusting it when runtime validation is required.
- Do not duplicate the same type in multiple layers.
