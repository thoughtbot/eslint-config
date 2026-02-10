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
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
  bestPractices,
  errors,
  node,
  style,
  variables,
  es6,
  imports,
  strict,
];
