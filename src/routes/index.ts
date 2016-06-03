import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', (request: express.Request, response: express.Response) => {
  response.render('index', { title: 'Express' });
});

export default router;
