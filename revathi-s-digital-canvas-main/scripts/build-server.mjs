import { build } from 'esbuild';
import { mkdirSync, existsSync } from 'fs';

mkdirSync('dist/server', { recursive: true });

const serverPath = 'dist/server/server.js';
if (existsSync(serverPath)) {
  console.log(`${serverPath} already exists — skipping esbuild bundling.`);
  process.exit(0);
}

console.log('Bundling server to dist/server/server.js (esbuild fallback)...');

// Mark TanStack virtual imports as external so esbuild doesn't try to resolve them.
await build({
  entryPoints: ['src/server.ts'],
  outfile: serverPath,
  bundle: true,
  platform: 'node',
  target: ['node18'],
  format: 'esm',
  external: [
    '#tanstack-router-entry',
    '#tanstack-start-entry',
    'tanstack-start-manifest:v',
  ],
});

console.log('Server bundle complete.');
