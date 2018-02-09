# egg-js-validator

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-js-validator.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-js-validator
[travis-image]: https://img.shields.io/travis/eggjs/egg-js-validator.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-js-validator
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-js-validator.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-js-validator?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-js-validator.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-js-validator
[snyk-image]: https://snyk.io/test/npm/egg-js-validator/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-js-validator
[download-image]: https://img.shields.io/npm/dm/egg-js-validator.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-js-validator

<!--
Description here.
-->

## Install

```bash
$ npm i egg-js-validator --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.jsValidator = {
  enable: true,
  package: 'egg-js-validator',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.jsValidator = {
    client: {},
    app: true,
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
