/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: ['import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    'import/no-unresolved': 'error',
  },
  overrides: [
    {
      files: ['*.js', '*.mjs', '*.cjs'],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      extends: ['eslint:recommended', 'prettier'],
    },
    {
      files: ['*.astro'],
      extends: ['plugin:astro/recommended', 'prettier'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        // override/add rules settings here, such as:
        // "astro/no-set-html-directive": "error"
      },
    },
  ],
};
