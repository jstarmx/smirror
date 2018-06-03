import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import winston from 'winston';

require('./interface');

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

app.use(bodyParser());
app.use(async (ctx, next) => {
  ctx.set('Content-Type', 'application/json');
  await next();
});

app.use(router.routes());
app.use(router.allowedMethods());

const server = app.listen(port, () =>
  winston.info(`Smirror is running on port ${port}.`),
);

module.exports = server;
