'use strict';

/**
 * 插件入口
 *
 * @author CaiAoLin
 * @date 2018/2/9
 * @version
 */

const JSValidator = require('./lib/js_validator');
let ctx = null;
module.exports = app => {
    ctx = app.createAnonymousContext();
    if (app.config.jsValidator.app) {
        app.addSingleton('jsValidator', createJsValidate);
    }
};

function createJsValidate(config, app) {
    const jsValidator = new JSValidator(ctx);

    app.beforeStart(function* () {
        app.coreLogger.info('[egg-js-validator] status OK');
    });

    return jsValidator;
}
