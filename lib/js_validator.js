'use strict';

/**
 * egg内置验证器与jquery验证器结合
 *
 * @author CaiAoLin
 * @date 2018/2/7
 * @version
 */

class JSValidator {

    /**
     * 构造函数
     *
     * @param {Object} ctx - egg全局变量
     * @return {void}
     */
    constructor(ctx) {
        this.rule = {};
        // 模板
        this.template = 'layout/validator_template.ejs';
        // 表单元素
        this.selector = 'form';
        this.ctx = ctx;
        this.message = {};
    }

    /**
     * 设置选择器
     *
     * @param {String} selectorName - 选择器名称
     * @return {Object} - 返回自身类以便链式操作
     */
    setSelector(selectorName) {
        this.selector = selectorName;
        return this;
    }

    /**
     * 转换格式
     *
     * @param {Object} rule - egg中的规则
     * @return {Object} - 返回自身类以便链式操作
     */
    convert(rule) {
        const result = {};
        const messageResult = {};
        if (Object.keys(rule).length <= 0) {
            return rule;
        }

        for (const index in rule) {
            result[index] = {};
            const type = rule[index].type !== undefined && rule[index].type !== '' ? rule[index].type : '';
            const stringType = ['string', 'password'];
            // 是否必填
            if (rule[index].required !== undefined) {
                result[index].required = rule[index].required;
            }

            // 最小长度
            if (stringType.indexOf(type) >= 0 && rule[index].min !== undefined) {
                result[index].minlength = rule[index].min;
            }

            // 最大长度
            if (stringType.indexOf(type) >= 0 && rule[index].max !== undefined) {
                result[index].maxlength = rule[index].max;
            }

            // 密码相关
            if (type === 'password' && rule[index].compare !== undefined) {
                result[index].equalTo = '#' + rule[index].compare;
            }

            // 最小值
            const integerType = ['integer', 'int', 'Number'];
            if (integerType.indexOf(type) >= 0 && rule[index].min !== undefined) {
                result[index].min = rule[index].min;
            }

            // 最大值
            if (integerType.indexOf(type) >= 0 && rule[index].max !== undefined) {
                result[index].max = rule[index].max;
            }

            // 自定义判断
            const customType = ['mobile', 'ip'];
            // 自定义且带参数
            if (customType.indexOf(type) >= 0) {
                result[index][type] = true;
                if (rule[index].allowEmpty !== undefined) {
                    result[index].required = !rule[index].allowEmpty;
                }
            }

            // 密码值判断
            if (type === 'password' && rule[index].compare !== undefined) {
                result[index].equalTo = '#' + rule[index].compare;
            }

            // 提示语
            if (rule[index].message !== undefined) {
                messageResult[index] = rule[index].message;
            }

        }

        this.rule = result;
        this.message = messageResult;
        return this;
    }

    /**
     * 构建js
     *
     * @return {String} - 返回js
     */
    async build() {
        if (Object.keys(this.rule).length <= 0) {
            return '';
        }

        const renderData = {
            selector: this.selector,
            rule: this.rule,
            message: this.message,
        };
        return await this.ctx.renderView(this.template, renderData);
    }

}

module.exports = JSValidator;
