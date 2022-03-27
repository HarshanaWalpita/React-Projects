const name = require('./names')
const sayHi = require('./util')
const data  = require('./file4')
require('./file6')
setTimeout(()=>{
    sayHi(name.harshana)
}, 1000)

sayHi(name.walpita)
console.log(data)
