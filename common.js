const age = 23

// 这会被当做默认函数，相当于index.js那种感觉，所以可以之间调用
//导出的格式是：   { [Function] myAge: '23' }
module.exports = function () {
    console.log('hello world')
}

// 这种写法就可以让导出的对象既可以直接调用，又可以使用对象.key
module.exports.myAge = age
// 这样不行，会被覆盖
// exports.name = name


