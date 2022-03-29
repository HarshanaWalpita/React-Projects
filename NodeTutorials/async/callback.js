//call back

console.log("start")

function getData(id, callback){
    setTimeout(()=>{
       console.log("Data")
       callback({items: [1,2,3,4,5]}) 
    },3000);
}

const items = getData(1, items =>{
    console.log(items);
})

console.log("End")