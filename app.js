'use strict';

const { resolve, join } = require('path');

const Koa = require('koa');
const send = require('koa-send');
const render = require('koa-ejs');
const router = require('./route');

var app = new Koa();

render(app, {
    root: join(__dirname, 'views'),
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: true,
});

app.use(async (ctx, next) => {
    if (/api|search/.test(ctx.path)) {
        await next();
    } else {
        await send(ctx, ctx.path, { root: resolve(__dirname, 'public'), index: 'index.html' });
    }
});

app.keys = ['im a newer sercret', 'i like turtle'];

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
