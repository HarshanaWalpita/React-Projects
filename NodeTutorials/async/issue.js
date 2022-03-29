// issues

console.log("start")

function getData(id){
    setTimeout(()=>{
       console.log("Data")
       return {items: [1,2,3,4,5]}
    },3000)
}

const items = getData(1)
console.log(items)

console.log("End")