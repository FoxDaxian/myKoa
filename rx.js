const log = require('debug')('fox_info')
const Rx = require('rxjs/Rx')

const str = Rx.Observable.from('foo', 'bar123')
const arr = Rx.Observable.from([1, 2, 3])

// log(str)
// log(arr)

const myObservable = new Rx.Subject()
myObservable.subscribe(value => {
    log(value, 'value')
})
myObservable.next('foo')
