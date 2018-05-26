import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import winston from 'winston';

import Message from './models/message';

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

app.use(bodyParser());
app.use(async (ctx, next) => {
  ctx.set('Content-Type', 'application/json');
  await next();
});

router.get('/', async ctx => {
  ctx.body = await Message.all();
});

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(port, () =>
  winston.info(`Smirror is running on port ${port}.`),
);

module.exports = server;
