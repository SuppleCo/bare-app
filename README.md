# svelte-cloudinary compiler bundle reproduction

Demonstrates that `svelte-cloudinary` pulls the entire Svelte compiler (~414KB) into client bundles via `import { VERSION } from 'svelte/compiler'` in its `config.ts`.

## Steps to reproduce

```bash
pnpm install
pnpm build
```

Then inspect the client output:

```bash
# Find chunks containing the acorn parser (part of svelte/compiler)
grep -rl "isIdentifierStart\|acorn" .svelte-kit/output/client/_app/

# Check size of the offending chunk
wc -c .svelte-kit/output/client/_app/immutable/chunks/*.js | sort -n | tail -5
```

## Expected

Only the lightweight Svelte runtime (~5KB) should be in client bundles.

## Actual

A ~400KB+ client chunk is produced containing:
- The full **acorn** JavaScript parser
- **@sveltejs/acorn-typescript** plugin
- Svelte compiler internals (`CompileError`, option validation, etc.)

## Root cause

[`packages/svelte-cloudinary/src/helpers/config.ts`](https://github.com/svelte-cloudinary/svelte-cloudinary/blob/main/packages/svelte-cloudinary/src/helpers/config.ts) imports:

```ts
import { VERSION as SVELTE_VERSION } from 'svelte/compiler';
```

This transitively bundles the entire compiler. The `VERSION` string could instead be read from `svelte/package.json` or resolved at build time.
