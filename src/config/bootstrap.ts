import * as express from 'express';

import MiddlewareConfig from './middlewareconfig';
import Routes from './routes';
import EnvConfig from './envconfig';

export default class Bootstrap
{
    public static configure(app : express.Application) : void
    {
        MiddlewareConfig.configure(app);
        Routes.configure(app);
        EnvConfig.configure(app);
    }
}