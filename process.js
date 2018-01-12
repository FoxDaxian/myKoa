const log = require('debug')('fox_Info')

log(process.cwd()) // 当前工作目录
log(process.env) // 返回一个包含用户环境信息的对象
log(process.version) // 返回node版本
