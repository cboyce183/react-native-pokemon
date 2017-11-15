const Koa = require('koa');
const app = new Koa();
const mmmmpokemonstoree = require('../models/mmmmpokemonstoree.js');
const fs = require('fs');
const koasend = require('koa-send');

exports.get = async(ctx, next) => {
  console.log('Attempting to catch em all');
  ctx.response.body = await mmmmpokemonstoree.gottaCatchEmAll();
  console.log(ctx.response.body);
  ctx.status = 200;
}
