/// <reference path="typings/main.d.ts" />

import express = require('express');
import path = require('path');
import favicon = require('serve-favicon');

import routes = require('./routes/index');
import users = require('./routes/users');

import Bootstrap = require('./config/bootstrap');

let app = express();

Bootstrap.configure(app);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
let notFound = function(req, res, next) {
  let err : any = new Error('Not Found');
  err.status = 404;
  next(err);
}
<<<<<<< HEAD

=======
>>>>>>> ef73d9eab1b90566faaca0493c14dcd580105d05
app.use(notFound);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  let stackTraceWatcher = function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  }
    
  app.use(stackTraceWatcher);
}

// production error handler
// no stacktraces leaked to user
let errorHandler = function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
}
app.use(errorHandler);


module.exports = app;
