'use strict';

const { app, assert } = require('egg-mock/bootstrap');
const JsValidator = require('../lib/js_validator');

describe('test/js-validator.test.js', () => {

    it('test convert', function* () {
        // 创建 ctx
        const ctx = app.mockContext();
        const jsValidator = new JsValidator(ctx);
        const rule = {
            username: { type: 'string', required: true, allowEmpty: false, min: 4, max: 10 },
            group_id: { type: 'integer', required: true, allowEmpty: false, min: 4, max: 10 },
            password: { type: 'password', required: true, allowEmpty: false, min: 4 },
            confirm_password: { type: 'password', required: true, allowEmpty: false, min: 4, compare: 'password' },
            ip: { type: 'ip', allowEmpty: false },
            telephone: { type: 'mobile', allowEmpty: false },
        };
        // 转换为json验证
        jsValidator.convert(rule);
        const convertRule = JSON.stringify(jsValidator.rule);
        let expectRule = {
            username: { required: true, minlength: 4, maxlength: 10 },
            group_id: { required: true, min: 4, max: 10 },
            password: { required: true, minlength: 4 },
            confirm_password: { required: true, minlength: 4, equalTo: '#password' },
            ip: { ip: true, required: true },
            telephone: { mobile: true, required: true },
        };
        expectRule = JSON.stringify(expectRule);
        assert(convertRule === expectRule);
    });

    it('test js validator', function* () {
        const ctx = app.mockContext();
        const jsValidator = new JsValidator(ctx);

        const rule = {
            username: { type: 'string', required: true, allowEmpty: false, min: 4, max: 10 },
            group_id: { type: 'integer', required: true, allowEmpty: false, min: 4, max: 10 },
            password: { type: 'password', required: true, allowEmpty: false, min: 4 },
            confirm_password: { type: 'password', required: true, allowEmpty: false, min: 4, compare: 'password' },
            ip: { type: 'ip', allowEmpty: false },
            telephone: { type: 'mobile', allowEmpty: false },
        };
        const jsCode = jsValidator.convert(rule).build();
        assert(jsCode !== '');
    });
});
