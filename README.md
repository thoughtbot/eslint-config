# thoughtbot ESLint Config

Batteries-included sharable [ESLint][eslint] configurations for React, React
Native, TypeScript, and Node.js that enforce [thoughtbot’s JavaScript
guides][thoughtbot-js-guides]. These configurations are largely based off of and
compatible with [AirBnb’s ESLint config][airbnb-config].

[eslint]: https://eslint.org/
[thoughtbot-js-guides]: https://github.com/thoughtbot/guides/tree/main/javascript
[airbnb-config]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb

## Installation

If using **npm**, run:

```bash
npm install @thoughtbot/eslint-config --save-dev
```

If using **Yarn**, run:

```bash
yarn add @thoughtbot/eslint-config --dev
```

## Usage

This package includes configurations for most common tech stacks. Update your [ESLint configuration][eslint-configuration] to extend the appropriate setup:

- `@thoughtbot/eslint-config` - same as `@thoughtbot/eslint-config/react`
- `@thoughtbot/eslint-config/react` - React web, Jest, Testing Library, Prettier
- `@thoughtbot/eslint-config/base` - base web config, no React or Prettier
- `@thoughtbot/eslint-config/native` - React Native, Jest, RN Testing Library, Prettier
- `@thoughtbot/eslint-config/prettier` - Prettier, automatically used when using React or Native config
- `@thoughtbot/eslint-config/typescript` - TypeScript config, add this if using Typescript

The configurations that include Prettier turn off all formatting rules that are also handled by Prettier to reduce conflicts between the two tools. It is recommended to add Prettier to your project and ensure that your CI environment also runs Prettier to verify code formatting.

### Example usage:

Following are some example usages of this config (eg. in `eslint.config.mjs`).

React with TypeScript:

```js
import { defineConfig } from "eslint/config";
import thoughtbotConfig from "@thoughtbot/eslint-config";
import thoughtbotTypescriptConfig from "@thoughtbot/eslint-config/typescript";

export default defineConfig([
  {
    extends: [
      thoughtbotConfig,
      thoughtbotTypescriptConfig,
    ],
  },
]);
```

React Native with TypeScript:

```js
import { defineConfig } from "eslint/config";
import thoughtbotTypescriptConfig from "@thoughtbot/eslint-config/typescript";
import thoughtbotNativeConfig from "@thoughtbot/eslint-config/native";

export default defineConfig([
  {
    extends: [
      thoughtbotNativeConfig,
      thoughtbotTypescriptConfig,
    ],
  },
]);
```

Base web without React or TypeScript

```js
import { defineConfig } from "eslint/config";
import thoughtbotBaseConfig from "@thoughtbot/eslint-config/base";

export default defineConfig([
  {
    extends: [
      thoughtbotBaseConfig,
    ],
  },
]);
```

You can override rules from the shared configuration, by setting your
own values within the `rules` property:

```js
import { defineConfig } from "eslint/config";
import thoughtbotBaseConfig from "@thoughtbot/eslint-config/base";

export default defineConfig([
  {
    extends: [
      thoughtbotBaseConfig,
    ],
    rules: {
      'no-console': 'off',
      'import/order': 'off',
    }
  },
]);
```

You might also need to add the following to your ESLint config if you get an error about Jest not being able to detect the version:

```js
settings: {
  jest: {
    version: 'detect',
  },
},
```

Consult the [ESLint documentation][eslint-configuration] for more information about configuring ESLint, and take a look at the config files in this repo for more information about the rules and plugins they include.

[eslint-configuration]: https://eslint.org/docs/user-guide/configuring

## Using this with older ESLint versions

[Version 2.0.0](https://github.com/thoughtbot/eslint-config/releases/tag/v2.0.0) of this package bumped the ESLint peer dependency to ESLint 9. If you want to use this config with older versions of ESLint, your best bet is to use [an older version @thoughtbot/eslint-config](https://www.npmjs.com/package/@thoughtbot/eslint-config?activeTab=versions). 

Your config will look like this:
```js
{
  "extends": [
    "@thoughtbot/eslint-config",
    "@thoughtbot/eslint-config/typescript"
  ]
}
```

Version 2.0.0 _should_ still work with ESLint 7 and 8 if you ignore the peer dependency warnings. But that will not be true for future versions of this config.
## What do each of the plugin dependencies do?

- `@typescript-eslint`: allow ESLint to parse TypeScript files, and provides linting rules for TypeScript
- `eslint-plugin-import`: lint import/export syntax and spelling of file paths and import names
- `eslint-import-resolver-typescript`: add TypeScript support to `eslint-plugin-import`
- `eslint-plugin-jest`: lint Jest tests
- `eslint-plugin-testing-library`: linting rules for Testing Library
- `eslint-plugin-react`: React-specific linting rules
- `eslint-plugin-react-hooks`: linting rules for React patterns
- `eslint-plugin-jsx-a11y`: find accessibility issues in React code
- `eslint-config-prettier`: turns off rules that conflict with Prettier
- `confusing-browser-globals`: list of browser global variables that might cause naming conflicts - passed to ESLint's `no-restricted-globals` config

## Testing your configs

You can use `npx @eslint/config-inspector` to open a browser-based inspector that tells you the status of all the rules (and whether anything is broken).

## License

thoughtbot ESLint Config is copyright (c) 2026 thoughtbot, inc.
It is free software, and may be redistributed under the
terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE.md

<!-- START /templates/footer.md -->
## About thoughtbot

![thoughtbot](https://thoughtbot.com/thoughtbot-logo-for-readmes.svg)

This repo is maintained and funded by thoughtbot, inc.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software!
See [our other projects][community].
We are [available for hire][hire].

[community]: https://thoughtbot.com/community?utm_source=github
[hire]: https://thoughtbot.com/hire-us?utm_source=github

<!-- END /templates/footer.md -->
