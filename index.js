const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const path = require('path')

// debug包部分
const debug = require('debug')('fox')
const error = require('debug')('fox_Error')
const log = require('debug')('fox_Info')
const base_log = require('debug')('请求基本信息')

const logger = (ctx, next) => {
    base_log(ctx.method)
    base_log(ctx.url)
    next()
}

const handler = async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.response.status = err.statusCode || err.status || 500
        ctx.response.body = err
        error('出错啦', err.message)
    }
    
}
app.use(logger)
app.use(handler)

app.use((ctx, next) => {
    ctx.response.body = '123'
})

app.on('error', err => {
    error('启动失败啦:', err)
})

app.listen(3000, () => {
    debug('listening in localhost:3000')
})
