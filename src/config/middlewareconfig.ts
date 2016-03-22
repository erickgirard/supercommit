import bodyParser = require('body-parser');
import cookieParser = require('cookie-parser');
import logger = require('morgan');

import path = require('path');

let _initBodyParser = (app : any) : void => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}

let _configureViewEngine = (app : any, path : any) : void => {
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
}

let _configureCookieParser = (app : any) : void => {
    app.use(cookieParser());
}

let _configureLogger = (app : any) : void => {
    app.use(logger('dev'));
}

class MiddlewareConfig
{
    static configure(app : Express.Application)
    {
        _initBodyParser(app);
        _configureViewEngine(app, path);
        _configureCookieParser(app);
        _configureLogger(app);
    }
}

export = MiddlewareConfig;