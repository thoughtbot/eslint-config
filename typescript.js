import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser'; // TODO
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { typescriptRules } from './rules/index.js';
import base from './base.js';

export default [
  base,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
    settings: {
      'import/resolver': [createTypeScriptImportResolver()],
    },
  },
  typescriptRules,
];
