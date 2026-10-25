import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import boundaries from 'eslint-plugin-boundaries';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintReact from '@eslint-react/eslint-plugin';

const FSD_LAYERS = ['app', 'pages', 'widgets', 'features', 'entities', 'shared'];

const PUBLIC_API = 'index.{ts,tsx,js,jsx}';

const NO_CROSS_SLICE_LAYERS = ['pages', 'widgets', 'features', 'entities'];

const FORBIDDEN_LAYERS = {
  app: [],
  pages: ['app'],
  widgets: ['app', 'pages'],
  features: ['app', 'pages', 'widgets'],
  entities: ['app', 'pages', 'widgets', 'features'],
  shared: ['app', 'pages', 'widgets', 'features', 'entities'],
};

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      eslintReact.configs['recommended-typescript'],
      eslintReact.configs['disable-conflict-eslint-plugin-react-hooks'],
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'quotes': ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-single'],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'array-bracket-spacing': ['error', 'never'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'arrow-spacing': ['error', { before: true, after: true }],
      'eol-last': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-trailing-spaces': 'error',
      'eqeqeq': ['error', 'always'],
      'no-alert': 'warn',
      'no-console': 'warn',
      'no-else-return': 'error',
      'object-shorthand': 'error',
      'prefer-object-spread': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@eslint-react/dom-no-script-url': 'error',
      '@eslint-react/no-array-index-key': 'error',
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: { boundaries },
    settings: {
      'boundaries/root-path': fileURLToPath(new URL('.', import.meta.url)),
      'boundaries/include': ['src/**/*'],
      'boundaries/elements': [
        ...FSD_LAYERS.map((layer) => ({
          type: layer,
          pattern: `src/${layer}/*`,
          partialMatch: false,
          capture: ['slice'],
        })),
        { type: 'app', pattern: 'src/app', partialMatch: false },
      ],
      'import/resolver': {
        typescript: {
          project: './tsconfig.app.json',
        },
      },
    },
    rules: {
      'boundaries/dependencies': [
        'error',
        {
          default: 'allow',
          policies: [
            {
              disallow: {
                to: {
                  element: {
                    type: FSD_LAYERS.filter((layer) => layer !== 'app'),
                    fileInternalPath: `!${PUBLIC_API}`,
                  },
                },
              },
              message:
                'Slice "{{from.element.path}}" cannot import past the public API: "{{to.element.path}}/{{to.element.fileInternalPath}}" — use the slice index.ts "{{to.element.path}}"',
            },
            {
              allow: {
                from: { element: { type: 'shared' } },
                to: { element: { type: 'shared' } },
              },
            },
            {
              allow: {
                to: {
                  element: { type: 'shared', captured: { slice: 'assets' } },
                },
              },
            },
            ...NO_CROSS_SLICE_LAYERS.map((layer) => ({
              from: { element: { type: layer } },
              disallow: { to: { element: { type: layer } } },
              message: `Slice "{{from.element.path}}" cannot import slice "{{to.element.path}}" — it is another slice of the "${layer}" layer`,
            })),
            {
              allow: { dependency: { relationship: { to: 'internal' } } },
            },
            ...Object.entries(FORBIDDEN_LAYERS)
              .filter(([, forbidden]) => forbidden.length > 0)
              .map(([layer, forbidden]) => ({
                from: { element: { type: layer } },
                disallow: { to: { element: { type: forbidden } } },
                message: 'Slice "{{from.element.path}}" cannot import "{{to.element.path}}" (layer "{{to.element.types.[0]}}")',
              })),
          ],
        },
      ],
    },
  },
]);
