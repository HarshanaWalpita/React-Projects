const os = require('os')

const user  = os.userInfo()
console.log(user)
console.log(`uptime : ${os.uptime()}`)