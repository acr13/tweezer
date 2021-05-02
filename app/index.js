import Koa from 'koa';
import Router from 'koa-router';

import { healthRouter } from './routes/health/index.js';
import { gamesRouter } from './routes/games/games.router.js';

const app = new Koa();
const router = new Router()
  .use('/health', healthRouter.routes())
  .use('/games', gamesRouter.routes());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
