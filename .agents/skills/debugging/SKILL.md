---
name: debugging
description: Systematic debugging workflow for frontend bugs, runtime errors, API issues, and state problems.
---

# Debugging Workflow

1. Reproduce the problem.
2. Identify the exact failing behavior.
3. Inspect the relevant component, hook, state, API call, and route.
4. Determine the root cause before editing.
5. Make the smallest fix.
6. Check related states and edge cases.
7. Run the relevant typecheck, lint, test, or build command if available.

Do not:

- randomly change multiple files
- rewrite working architecture
- suppress errors
- add arbitrary delays
- add useEffect as a workaround
- add dependencies just to solve a local problem

For API bugs, inspect request parameters, response shape, status code, authentication, query keys, and cache invalidation.
For UI bugs, inspect state ownership, conditional rendering, CSS, and component lifecycle.
