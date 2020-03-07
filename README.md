# thoughtbot ESLint Config

A sharable [ESLint][eslint] configuration that enforces
[thoughtbot’s JavaScript guides][thoughtbot-js-guides].

[eslint]: https://eslint.org/
[thoughtbot-js-guides]: https://github.com/thoughtbot/guides/tree/master/style/javascript

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

Set your [ESLint configuration][eslint-configuration] to:

```json
{
  "extends": "@thoughtbot/eslint-config"
}
```

You can override rules from the shared configuration, by setting your
own values within the `rules` property:

```json
{
  "extends": "@thoughtbot/eslint-config",
  "rules": {
    "quotes": [
      2,
      "double"
    ]
  }
}
```

You can also turn a rule off, by setting the value of the rule to `"off"`:

```json
{
  "extends": "@thoughtbot/eslint-config",
  "rules": {
    "quotes": "off"
  }
}
```

[eslint-configuration]: https://eslint.org/docs/user-guide/configuring

### Atom integration

ESLint can be integrated into [Atom][atom] so that you will be alerted of
any warnings and errors inline, while you work.

Install the [linter][linter] and [linter-eslint][linter-eslint] packages
using Atom’s package manager or enter this into your terminal:

```bash
apm install linter linter-eslint
```

[atom]: https://atom.io/
[linter]: https://atom.io/packages/linter
[linter-eslint]: https://atom.io/packages/linter-eslint

## License

thoughtbot ESLint Config is copyright (c) 2020 thoughtbot, inc.
It is free software, and may be redistributed under the
terms specified in the [LICENSE] file.

[LICENSE]: /LICENSE.md

## About

![thoughtbot](http://presskit.thoughtbot.com/images/thoughtbot-logo-for-readmes.svg)

thoughtbot ESLint Config is maintained and funded by thoughtbot, inc.
The names and logos for thoughtbot are trademarks of thoughtbot, inc.

We love open source software! See [our other projects][community] or
[hire us][hire] to help build your product.

[community]: https://thoughtbot.com/community?utm_source=github
[hire]: https://thoughtbot.com/hire-us?utm_source=github
