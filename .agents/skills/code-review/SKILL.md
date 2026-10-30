---
name: code-review
description: Review frontend changes for correctness, architecture, maintainability, regressions, and unnecessary complexity.
---

# Code Review Checklist

Check in this order:

1. Correctness
2. Runtime behavior
3. Type safety
4. Architecture and FSD boundaries
5. State management
6. API behavior
7. UI states
8. Accessibility
9. Performance
10. Maintainability

Look specifically for:

- unnecessary re-renders
- incorrect effect dependencies
- duplicated business logic
- unsafe type assertions
- any
- hidden race conditions
- stale server state
- missing loading/error/empty states
- broken URL/query synchronization
- incorrect permissions or role checks
- imports that violate FSD
- unnecessary abstractions
- unrelated changes

When reviewing, prioritize real bugs and architectural problems over stylistic preferences.
