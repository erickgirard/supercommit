"use strict";
var MiddlewareConfig = require('./middlewareconfig');
var Bootstrap = (function () {
    function Bootstrap() {
    }
    Bootstrap.configure = function (app) {
        MiddlewareConfig.configure(app);
    };
    return Bootstrap;
}());
module.exports = Bootstrap;
