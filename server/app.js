const Koa = require('koa'); //gets koa to create server
const app = new Koa(); //create new instance of koa
const serve = require('koa-static'); // need to serve static server
const router = require('./router.js');
const bodyparser = require('koa-bodyparser');
const cors = require('koa-cors'); //this handles header permissions. Just stick it in and it works (along with line 8)

app.use(bodyparser())
  .use(cors())
  .use(router.routes());

app.listen(4000);


//nb: need to npm install ALL koa packages seperately. in this case thats koa, koa-static, koa-bodyparser
// ,koa-cors, koa-router, koa-send, fs
