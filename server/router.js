const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const router = new Router();

const pokemonController = require('./controllers/pokemonController.js')

router.get('/', pokemonController.get)

module.exports = router;
