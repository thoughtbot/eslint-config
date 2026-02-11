import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { typescriptRules } from './rules/index.js';
import baseConfig from './base.js';

export default [
  // we don't include the thoughtbot baseConfig because this config is intended to be used alongside other configs
  // the recommendedTypeChecked config also includes recommended TS rules
  ...tseslint.configs.recommendedTypeChecked,
  {
    name: '@thoughtbot/eslint-config/typescript',
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
    rules: {
      ...typescriptRules.rules,
    },
  },
];
