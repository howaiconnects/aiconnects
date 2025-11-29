# package: config

Centralized lint/format/style presets. Consumers should point their local configs to these presets.

## Usage
- ESLint: create `eslint.config.mjs` in the package/app root and `export { default } from "@aiconnects/config/eslint.config";`
- Prettier: create `prettier.config.mjs` and `export { default } from "@aiconnects/config/prettier.config";`
- Tailwind: in `tailwind.config.mjs` import the preset or extend it (`import base from "@aiconnects/config/tailwind.config"; export default { ...base, content: [...] }`).
- PostCSS: `export { default } from "@aiconnects/config/postcss.config";`

Keep versions aligned at the monorepo root (Next 15 / React 19 / TS 5.6).
