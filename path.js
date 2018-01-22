/*
 * @Author: fox 
 * @Date: 2018-01-12 15:37:41 
 * @Last Modified by: fox
 * @Last Modified time: 2018-01-12 15:46:10
 */

const log = require('debug')('fox_Info')

const path = require('path')

log(path.basename('/a/s/d/f/sdas.html')) // 返回path的最后一部分
log(process.env.PATH)
log(path.delimiter) // 分隔符
log(path.dirname('/a/s/v/a')) // 返回一个目录名
log(__dirname) // 当前目录
log(path.extname('/a/s/d.sd')) // 返回扩展名
log(
    path.format({
        dir: '/home/fox',
        base: 'index.html',
        root: '/mac/',
        name: 'index',
        ext: '.html'
    })
) // 返回一个路径字符串
log(path.parse('/home/fox/index.html')) // 返回路径对象
// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

log(path.isAbsolute('/a/b')) // 如其名
log(path.join('/foo', './s', '../..')) // 根据当前平台组合路径，基于前一个参数，第一个为/foo，第二个为.，结果为/foo.第二个为..，结果为/
log(path.normalize('/s/d/w')) // 类似一个参数的join
console.log('=============================')
log(path.relative('./a/b/c', './')) // 自动获取第一个参数到第二个参数需要的操作
log(path.resolve('./home/fox/a', '../')) // 计算出一个绝对路径，规则和join相同
log(path.sep) // 根据当前计算机系统获取路径间的分隔符，是 '/' 还是 '\'