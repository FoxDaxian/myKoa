const Koa = require('koa');
const app = new Koa();
const debug = require('debug')('fox');
const error = require('debug')('fox_Error');
const log = require('debug')('fox_Info');

app.use(async ctx => {
	ctx.body = '你好';
});

app.listen(3000, () => {
	debug('listening');
});

app.on('error', err => {
	error('错误信息:', err);
});
