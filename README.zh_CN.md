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

## 依赖说明

### 依赖的 egg 版本

egg-js-validator 版本 | egg 1.x
--- | ---
1.x | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 使用场景

- 使用egg自带验证器，写一套验证规则后前台JQuery Validate共用同个规则


## 安装使用

```bash
$ npm i egg-js-validator --save
```

## 开启插件

```js
// config/plugin.js
exports.jsValidator = {
  enable: true,
  package: 'egg-js-validator',
};
```


## 详细配置
```js
// {app_root}/config/config.default.js
exports.jsValidator = {
    client: {},
    app: true,
};
```
- client不配置的话需要使用app.jsValidator.create()获取对象
- app为false则不加入egg的app对象

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [egg issues](https://github.com/eggjs/egg/issues) 异步交流。

## License

[MIT](LICENSE)
