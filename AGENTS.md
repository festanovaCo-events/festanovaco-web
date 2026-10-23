<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

Lee y aplica estas dos guías sobre el código actual de `src/`:

- `.cursor/rules/component-boundaries.mdc`
- `.cursor/skills/clean-code/SKILL.md`

Deja cada archivo como esas guías lo piden. El cambio se queda en lo que no cumple. No reescribas la arquitectura ni crees `index.ts` de reexportación.
