function makerequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`making request to location ${location}`)
        if(location == 'Google'){
            resolve('Say hi to Google')
        }else{
            reject('We can only talk to google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log('processing response');
        resolve(`Extra information ${response}`)
    })
}

// makerequest('facebook').then((response)=>{
//     console.log('response recived')
//     return processRequest(response)
// }).then((processedRequest)=>{
//     console.log(processedRequest)
// }).catch((error)=>{
//     console.log(error)
// })

async function dowork(){
   try{
        const response = await makerequest('facebook')
        console.log('Respose received')
        const processedRespose = await processRequest(response)
        console.log(processedRespose)

   }catch(err){
      console.log(err);
   }
}
dowork()