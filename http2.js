const url = require('url')
const querystring = require('querystring')

const Config = require('config')
const logColor = Config.get('custom.logColor')

const log = require('debug')('info')
log.color = logColor.info

const http = require('http')

const app = http.createServer((req, res) => {
    var exec = require('child_process').exec

    exec('cat http.js', function(error, stdout, stderr) {
        res.writeHead(200, { 'Content-Type': 'text/plain;charset=utf-8' })
        res.write(stdout)
        res.end()
    })
})
app.listen(8080)
