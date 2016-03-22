"use strict";
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var _initBodyParser = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
};
var _configureViewEngine = function (app, path) {
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
};
var _configureCookieParser = function (app) {
    app.use(cookieParser());
};
var _configureLogger = function (app) {
    app.use(logger('dev'));
};
var MiddlewareConfig = (function () {
    function MiddlewareConfig() {
    }
    MiddlewareConfig.configure = function (app) {
        _initBodyParser(app);
        _configureViewEngine(app, path);
        _configureCookieParser(app);
        _configureLogger(app);
    };
    return MiddlewareConfig;
}());
module.exports = MiddlewareConfig;
