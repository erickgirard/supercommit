import * as express from 'express';
import * as path from 'path';

import routes from '../routes/index';
import users from '../routes/users';

function notFound(request: express.Request, response: express.Response, next: any) {
    let err : any = new Error('Not Found');
    err.status = 404;
    
    next(err);
}

export default class Router {
    public static configure(app : express.Application) : void {
        // user routes
        app.use('/', routes);
        app.use('/users', users);
        
        // /public
        app.use(express.static(path.join(__dirname, 'public')));
        
        // not found
        app.use(notFound);
    }
}