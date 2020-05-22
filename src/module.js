console.log("module")

async function start(){
    return await Promise.resolve('async workink')
}

start().then(console.log)