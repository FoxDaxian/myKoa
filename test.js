import test from 'ava'
import Debug from 'debug'

const log = Debug('info:')

test('foo', t => {
    t.pass()
})

test('bar', async t => {
    const bar = Promise.resolve('bar')

    t.is(await bar, 'bar')
})