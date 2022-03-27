const { readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./path1/path2/pathTest.txt', 'utf8')
const second = readFileSync('./path1/pathTest2.txt', 'utf8')

console.log(first,second)