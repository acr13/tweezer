import router from 'koa-router';

import { todaysGame, getGameById } from './games.controller.js';

export const gamesRouter = router()
  .get('/', todaysGame)
  .get('/:gameId', getGameById);
