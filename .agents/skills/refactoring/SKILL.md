---
name: refactoring
description: Safe incremental refactoring without unnecessary architectural changes.
---

# Refactoring Standards

- First identify the concrete problem the refactor solves.
- Preserve behavior unless behavior change is explicitly requested.
- Prefer incremental changes.
- Do not refactor unrelated files.
- Avoid abstractions created only for hypothetical future reuse.
- Remove duplication only when the duplication is meaningful and the abstraction remains clear.
- Keep public APIs stable when possible.
- Verify typecheck, lint, tests, and build when available.
- Explain tradeoffs when a refactor changes architecture.
