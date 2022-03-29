const gossip = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       console.log("gossip") 
       resolve({gossip: [1,2,3,4,5]});
    },3000);
});

const videos = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       console.log("video") 
       resolve({gossip: [1,2,3]});
    },5000);
});

Promise.all([gossip,videos]).then(result=>{
    console.log(result) 
});