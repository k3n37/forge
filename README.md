# forge

Golden-path starter for production-minded TypeScript services.

## Purpose

Provide a clean service scaffold with health checks, config loading, and clear structure so new platform services start from a consistent baseline.

## Role in the ecosystem

- Template source for `orbit` and `saas-platform`
- Neighbor to `craft`
- Input to `relay`

## Status

Starter template with one minimal executable service layout.

## Tech stack

- TypeScript
- Node.js

## Structure

```text
forge/
├── src/
│   ├── config.ts
│   ├── health.ts
│   └── index.ts
├── .editorconfig
├── .gitignore
├── README.md
├── ROADMAP.md
├── package.json
└── tsconfig.json
```

## Getting started

```bash
npm install
npm run build
node dist/index.js
```

## Related repositories

- `craft`
- `relay`
- `orbit`

## Future direction

Keep the template small and high-signal. It should be copied and adapted, not worshipped.
