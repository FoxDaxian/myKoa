const debug = require('./debug-levels/')

const db = debug('命名空间')
db('直接调用')
db.log('log')
db.error('log')
db.warn('log')

