import MiddlewareConfig = require('./middlewareconfig');

class Bootstrap
{
    static configure(app : Express.Application)
    {
        MiddlewareConfig.configure(app);
    }
}

export = Bootstrap;