function longFunc(i,settimepara){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("i is "+i+ " in console")
            let result = "i is "+ i
            resolve(result)
        }, settimepara)
    })
}

async function awaitres(){
    for(let j=0;j<5;j++){
        await longFunc(j,(5-j)*2000)
    }

    console.log("awaitres is running")
    return "done"
}

awaitres()
    .then(result => console.log(result))
    .catch(err=> console.log(err))

// longFunc()
//     .then(result => console.log(result))
//     .catch(err=> console.log(err))