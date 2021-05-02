import router from 'koa-router';

const healthCheck = async (ctx) => {
  ctx.body = 'im healthy';
};

export const healthRouter = router().get('/', healthCheck);
