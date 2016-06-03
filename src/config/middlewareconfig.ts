import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import * as path from 'path';

function initBodyParser (app : express.Application) : void {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}

function configureViewEngine (app : express.Application) : void {
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
}

function configureCookieParser (app : express.Application) : void {
    app.use(cookieParser());
}

function configureLogger (app : express.Application) : void {
    app.use(logger('dev'));
}

function configureFavicon (app : express.Application) : void {
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
}

export default class MiddlewareConfig
{
    public static configure(app : express.Application) : void
    {
        initBodyParser(app);
        configureViewEngine(app);
        
        configureCookieParser(app);
        configureLogger(app);

        configureFavicon(app);
    }
}