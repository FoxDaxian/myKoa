const log = require('debug')('info')
const err_log = require('debug')('error')
const Config = require('config')
const config = Config.get('custom')

const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

const static_path = path.resolve(__dirname, './config', config.assets)
const router_path = path.resolve(__dirname, './config', config.router)

const dev = require(`${router_path}/`)

let static_files
fs.readdir(static_path, (err, files) => {
    if (err) {
        err_log(new Error(`出错啦：${err}`))
    }
    static_files = Array.prototype.concat([], files)
})

const app = http.createServer((req, res) => {
    const urlinfo = url.parse(req.url)
    if (urlinfo.pathname === '/favicon.ico') {
        res.end()
        return
    }
    switch (urlinfo.pathname) {
        case '/':
            res.writeHead(200, {
                'Content-Type': 'text/plain;charset=utf-8'
            })
            res.end('你好')
            break
        case /\/static\/.*/.test(urlinfo.pathname) && urlinfo.pathname:
            res.writeHead(200, {
                'Content-Type': 'text/html;charset=utf-8'
            })
            let path = urlinfo.pathname.substring(7)
            if (path[path.length - 1] === '/') {
                path = `${path}index.html`
            }
            fs.readFile(`${static_path}${path}`, (err, data) => {
                if (err) {
                    // err_log(new Error(`出错啦：${err}`))
                    res.end('no such file')
                }
                res.end(data)
            })
            break
        default:
            res.writeHead(200, {
                'Content-Type': 'text/plain;charset=utf-8'
            })
            res.end('404')
    }
})

app.listen(3000, () => {
    log('监听:localhost:3000')
})
