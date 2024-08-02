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

- `@thoughtbot/eslint-config` - React web, Jest, Testing Library, Prettier
- `@thoughtbot/eslint-config/react` - React web (same as above)
- `@thoughtbot/eslint-config/base` - base web config, no React or Prettier
- `@thoughtbot/eslint-config/native` - React Native, Jest, RN Testing Library, Prettier
- `@thoughtbot/eslint-config/prettier` - Prettier, automatically used when using React or Native config
- `@thoughtbot/eslint-config/typescript` - TypeScript config, add this if using Typescript

The configurations that include Prettier turn off all formatting rules that are also handled by Prettier to reduce conflicts between the two tools. It is recommended to add Prettier to your project and ensure that your CI environment also runs Prettier to verify code formatting.

### Example usage:

Following are some example usages of this config (eg. in `.eslintrc.js`).

React with TypeScript:

```json
{
  "extends": [
    "@thoughtbot/eslint-config",
    "@thoughtbot/eslint-config/typescript"
  ]
}
```

React Native with TypeScript:

```json
{
  "extends": [
    "@thoughtbot/eslint-config/native",
    "@thoughtbot/eslint-config/typescript"
  ]
}
```

Base web without React or TypeScript

```json
{
  "extends": ["@thoughtbot/eslint-config/base"]
}
```

You can override rules from the shared configuration, by setting your
own values within the `rules` property:

```json
{
  "extends": "@thoughtbot/eslint-config",
  "rules": {
    "react/jsx-newline": "warn"
  }
}
```

You might also need to add the following to your ESLint config if you get an error about Jest not being able to detect the version:

```json
{
  "settings": {
    "jest": { "version": "detect" }
  }
}
```

Consult the [ESLint documentation][eslint-configuration] for more information about configuring ESLint, and take a look at the config files in this repo for more information about the rules and plugins they include.

[eslint-configuration]: https://eslint.org/docs/user-guide/configuring

## License

thoughtbot ESLint Config is copyright (c) 2023 thoughtbot, inc.
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
