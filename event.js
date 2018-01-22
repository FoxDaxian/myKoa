const ee = require('events')
const config = require('config')
const logColor = config.get('custom.logColor')

const log = require('debug')('info')
const error = require('debug')('error')
log.color = logColor.info
error.color = logColor.error

class myee extends ee {
    constructor() {
        super()
        if (myee.canNew) {
            this.on('event', () => {
                console.log(123)
            })
            myee.canNew = !myee.canNew
        } else {
            error('不能重复创建')
            return {}
        }
    }
}
myee.canNew = true

const mye = new myee()
log(mye)
const mye1 = new myee()
log(mye1)
