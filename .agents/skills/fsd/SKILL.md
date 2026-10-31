---
name: fsd
description: Feature-Sliced Design architecture rules for frontend projects.
---

# Feature-Sliced Design

Use the project layers:

- app: application initialization, providers, routing, global configuration
- pages: route-level compositions
- widgets: large reusable page sections
- features: user-facing actions and business scenarios
- entities: business domain models and reusable domain UI
- shared: reusable infrastructure and UI without business ownership

## Rules

- Higher layers may import lower layers, not the reverse.
- shared must not depend on entities, features, widgets, pages, or app.
- entities must not depend on features, widgets, pages, or app.
- features must not depend on pages or widgets.
- Pages compose widgets and features.
- Widgets compose features, entities, and shared.
- Put business logic in the lowest layer that owns it.
- Do not create a layer just to move a file.
- Avoid overly generic shared components when they belong to a domain.
- Preserve public APIs through index files where the project uses them.
- Do not create cross-layer circular dependencies.
