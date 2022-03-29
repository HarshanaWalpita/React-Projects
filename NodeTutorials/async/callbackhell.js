//call back hell

console.log("start")

function getData(id, callback){
    setTimeout(()=>{
       console.log("Data")
       callback({items: [1,2,3,4,5]}) 
    },3000);
}

function getPrice(item, callback){
    setTimeout(()=>{
        callback({price: 500}) 
    }, 5000)
}

const items = getData(1, items =>{
    console.log(items);
    getPrice(items[0], price=>{
        console.log(price);
    })
})

console.log("End")