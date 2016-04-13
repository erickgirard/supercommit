/// <reference path="typings/main.d.ts" />
"use strict";
var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var users = require('./routes/users');
var Bootstrap = require('./config/bootstrap');
var app = express();
Bootstrap.configure(app);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);
app.use('/users', users);
// catch 404 and forward to error handler
var notFound = function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
};
app.use(notFound);
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    var stackTraceWatcher = function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    };
    app.use(stackTraceWatcher);
}
// production error handler
// no stacktraces leaked to user
var errorHandler = function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
};
app.use(errorHandler);
module.exports = app;
