/*
 * @Author: fox 
 * @Date: 2018-01-17 19:06:01 
 * @Last Modified by: fox
 * @Last Modified time: 2018-01-17 19:19:28
 * debug 1 用于错误信息
 * debug 2 用于成功信息
 * debug 3 用于警告信息
 * debug 4 用于一般信息
 */

const Debug = require('debug')
const log = Debug('info')
const qs = require('querystring')
log.color = 4

log(qs.escape('http://nodejs.cn/api/querystring.html')) // 转义
log(qs.unescape(qs.escape('http://nodejs.cn/api/querystring.html')))  //反转义
log(qs.parse('foo=bar123&abc=xyz&abc=123'))  // 解析 URL 查询字符串
const queryObj = {
    name: 'fox',
    age: 23,
    sex: 'man'
}
log(qs.stringify(queryObj))  // 与上面相反

