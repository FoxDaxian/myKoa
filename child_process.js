const log = require('debug')('info')
const cp = require('child_process')
const { spawn, exec } = cp
// Buffer.toString 转换成字符串

const http = require('http')

const ls = spawn('cat', ['package.json'])

// ls.stdout.on('data', (data) => {
//     log(data.toString('utf-8'))
// })



const app = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    
    exec('ls -l', (err, stdout, stderr) => {
        res.end(stdout)
    })
})

app.listen(8080)
