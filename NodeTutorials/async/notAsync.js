// every call back is not async

console.log("start")

const names  = ['A', 'B', 'C'];

names.forEach(name=>{
    console.log(name)
})

console.log("End")