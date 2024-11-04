Shared components across the entire application.

### Standard Component Structure

```
components
├── errors
│   ├── not-found.tsx
│   └── main.tsx
├── layout
│   ├── root-layout.tsx
│   ├── auth-layout.tsx
│   └── dashboard-layout.tsx
└── ui
    ├── button
    │   ├── button.tsx
    │   ├── button.theme.ts
    │   └── index.ts
    ├── dropdown
    │   ├── __test__
    │   ├── dropdown-item
    │   │   ├── __test__
    │   │   ├── dropdown-item.tsx
    │   │   └── index.ts
    │   ├── dropdown.tsx
    │   ├── dropdown.theme.ts
    │   └── index.ts
    └── ...
```

### Writing Unit Tests

- Unit tests should be placed in the `__test__` folder.
- Use the `*.test.tsx` or `*.test.ts` naming convention.
- Use the `*.spec.tsx` or `*.spec.ts` naming convention for integration tests.
- Use the `*.e2e.tsx` or `*.e2e.ts` naming convention for end-to-end tests.

### Naming Conventions

- Use `PascalCase` for the component name.
- Use `kebab-case` for the file and folder name.
