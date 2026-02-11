import js from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import {
  bestPractices,
  errors,
  es6,
  imports,
  node,
  strict,
  style,
  variables,
} from './rules/index.js';

export default [
  {
    name: '@eslint/js/recommended',
    ...js.configs.recommended,
  },
  {
    name: 'eslint-plugin-import/recommended',
    ...importPlugin.flatConfigs.recommended,
  },
  {
    name: '@thoughtbot/eslint-config/base',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      ...bestPractices.rules,
      ...errors.rules,
      ...node.rules,
      ...style.rules,
      ...variables.rules,
      ...es6.rules,
      ...imports.rules,
      ...strict.rules,
    },
  },
];
