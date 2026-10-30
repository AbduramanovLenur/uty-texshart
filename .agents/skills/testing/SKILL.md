---
name: testing
description: Testing standards for React frontend features and business logic.
---

# Testing Standards

- Test behavior, not implementation details.
- Prioritize critical business flows.
- Test loading, success, empty, and error states where relevant.
- Test user interactions and visible outcomes.
- Mock external APIs at the boundary.
- Avoid brittle snapshots unless they provide real value.
- Keep tests deterministic.
- Add regression tests for meaningful bugs.
- Do not test framework behavior or Ant Design internals.
