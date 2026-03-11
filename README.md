# service-template

Golden-path starter for production-minded TypeScript services.

## Purpose

Provide a clean service scaffold with health checks, config loading, and clear structure so new platform services start from a consistent baseline.

## Role in the ecosystem

- Template source for `master-platform` and `saas-platform`
- Neighbor to `programming-patterns`
- Input to `internal-developer-platform`

## Status

Starter template with one minimal executable service layout.

## Tech stack

- TypeScript
- Node.js

## Structure

```text
service-template/
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

- `programming-patterns`
- `internal-developer-platform`
- `master-platform`

## Future direction

Keep the template small and high-signal. It should be copied and adapted, not worshipped.
