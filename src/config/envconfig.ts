import * as express from 'express';

function devErrorHandler (err: any, request: express.Request, response: express.Response) : void {
    // development error handler
    // will print stacktrace
    response.status(err.status || 500);
    response.render('error', 
    {
        message: err.message,
        error: err
    });
}

function productionErrorHandler (err: any, request: express.Request, response: express.Response) : void {
    response.status(err.status || 500);
    response.render('error', 
    {
        message: err.message,
        error: {}
    });
}

export default class EnvConfig
{
    public static configure(app : express.Application) : void
    {
        let errorHandler = productionErrorHandler;
        if (app.get('env') === 'development') {
            errorHandler = devErrorHandler;
        }
            
        app.use(errorHandler);
    }
}