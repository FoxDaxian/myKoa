const log = require('debug')('info')

const http = require('http')

const app = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    })
    log(res.head)
    res.end('你好')
})

app.listen(3000, () => {
    log('监听在localhost:3000')
})
