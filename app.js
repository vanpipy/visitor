'use strict';

const Koa = require('koa');
const Router = require('koa-router');
const send = require('koa-send');
const request = require('request');

var app = new Koa();
var router = new Router();

router.get('/search', async (ctx, next) => {
    const page = ctx.query.page || 1;
    const user = ctx.query.q;

    /*
     * https://api.github.com/users/${user}
     * https://api.github.com/users
     */
});

router.get('/', async (ctx, next) => {
    await send(ctx, '/public/index.html');
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
