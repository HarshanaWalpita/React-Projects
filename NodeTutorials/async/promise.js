// promise

const promise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
       // console.log("data");
       // resolve({data: 'harshana'})
       reject(new Error('issue'));
    },5000);
});

promise.then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error.message);
});