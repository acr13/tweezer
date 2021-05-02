import got from 'got';

const BASE_URL = 'https://statsapi.web.nhl.com/api/v1/game';
const MONDAYS_GAME = '2020020819';
const BOXSCORE = 'boxscore';

export const todaysGame = async (ctx) => {
  const response = await got(`${BASE_URL}/${MONDAYS_GAME}/${BOXSCORE}`).json();
  ctx.body = response;
};

export const getGameById = async (ctx) => {
  // const { gameId } = ctx.params;
  const response = await got(`${BASE_URL}/${MONDAYS_GAME}/${BOXSCORE}`).json();
  ctx.body = response;
};
