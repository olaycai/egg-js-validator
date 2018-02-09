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

// {app_root}/controller/xx.js
module.exports = app => {

    class MyController extends Controller {
        async index(ctx) {
            const rule = {
                name: { type: 'string', required: true, min: 2 },
                company: { type: 'string', required: true, min: 2 },
            };
            const validator = await app.jsValidator.convert(rule).setSelector('#base-form').build();
            this.ctx.render('xx/xx.ejs', { validator });
        }
    }
};

// {app_root/views/xx.ejs}
<%- baseJsValidator %>
```

## Template Dir
/views/layout/validator_template.ejs
@todo set template dir

## Template content
```text
<script type="text/javascript">
$(document).ready(function() {
    $("<%= selector %>").validate({
        rules: <%- JSON.stringify(rule) %>,
        messages: <%- JSON.stringify(message) %>,
        errorPlacement: function(error, element) {
            $(element).addClass('is-invalid');
            $(element).after(error);
        },
        errorClass: "invalid-feedback",
        errorElement: "div",
        highlight: false,
        success: function(element) {
            $(element).prev('input').removeClass('is-invalid');
            $(element).remove();
        },
    });

});

</script>
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
