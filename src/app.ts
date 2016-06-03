/// <reference path="typings/main.d.ts" />

import * as express from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';

import Bootstrap from './config/bootstrap';

let app = express();

Bootstrap.configure(app);

module.exports = app;
