import path from 'path';
import { fileURLToPath } from 'url';

import js from '@eslint/js';
import ts from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslintPluginAstro from 'eslint-plugin-astro';

import typescriptPlugin from '@typescript-eslint/eslint-plugin';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default ts.config(
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  ...ts.configs.strict,
  ...eslintPluginAstro.configs.recommended,
  {
    name: 'Ignore patterns',
    ignores: [
      '.astro',
      '.vscode',
      'dist',
      'minecolonies',
      'node_modules',
      'public',
    ],
  },
  {
    name: 'Application rules (Astro)',
    files: ['**/*.astro'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
  },
  {
    name: 'Application rules (Typescript)',
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: dirname,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': [
        'error',
        {
          allowInterfaces: 'with-single-extends',
        },
      ],
    },
  },
  {
    name: 'Disable triple slash reference for auto-generated env.d.ts',
    files: ['src/env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
);
