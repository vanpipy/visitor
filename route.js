
const { resolve } = require('path');
const send = require('koa-send');

const Router = require('koa-router');
const router = new Router();

const searchController = require('./controllers/search');
const sayHelloController = require('./controllers/sayHello');

router.get('/search', searchController.get);

router.post('/api/sayHello', sayHelloController.post);

module.exports = router;
