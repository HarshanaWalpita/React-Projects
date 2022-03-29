console.log("start");

function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("user")
            resolve({secretId: 123});
        },3000)
    });
}

function getAllSecrets(secretId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data")
            resolve({secrets : [1,2,3,4,5]});
        },5000)
    })
}

async function displayInfo(){
    const user = await getUser(1);
    const secrets = await getAllSecrets(user.secretId)
    console.log(secrets)
}

displayInfo();

console.log("end");