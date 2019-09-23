function longFunc(i){
    return new Promise(function(resolve,reject){
        console.log("function " + i + " is running")
        console.log("function " + i + " still running")
        setTimeout(function(){
            console.log("i is "+i+ " in console")
            let result = "i is "+ i
            resolve(result)
        }, 4000)
        console.log("function " + i + " is running for long now")
        console.log("please make function " + i + " stop the execution")
    })
}

async function awaitres(){
    for(let j=0;j<5;j++){
        await longFunc(j)
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