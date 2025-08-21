// const  p  = new Promise((resolve,reject)=>{
//     let a = 1 + 1
//     if( a == 2){
//         resolve('success');
//     }else{
//         reject('failed')
//     }
// });

// p.then((message)=>{
//     console.log('this is in the then ' + message);
// }).catch((message)=>{
//     console.log('this is in the then ' + message);
// })
    
// example of callback
// const userleft = false;
// const  userWatchingcatMeme = true;

// function watchTutorialCallback(callback,errorCallback){
//     if(userleft){
//         errorCallback({
//             name: 'user callback',
//             message: ':('
//         })
//     }else if(userWatchingcatMeme){
//         errorCallback({
//             name: 'userWatchingcatMeme',
//             message: 'webdevSimplified'
//         })
//     }else{
//         callback('thumps up and subcribe')
//     }
// }

// watchTutorialCallback((message)=>{
//     console.log('success ' + message)
// },(error)=>{
//     console.log(error.name + ' ' + error.message)
// })


// example of promicse as callback
// const userleft = false;
// const  userWatchingcatMeme = false;

// function watchTutorialPromise(){
//     return new Promise((resolve, reject) => {
//         if(userleft){
//             reject({
//                 name: 'user callback',
//                 message: ':('
//             })
//         }else if(userWatchingcatMeme){
//             reject({
//                 name: 'userWatchingcatMeme',
//                 message: 'webdevSimplified'
//             })
//         }else{
//             resolve('thumps up and subcribe')
//         }
//     })
// }

// watchTutorialPromise().then((message)=>{
//     console.log('success ' + message)
// }).catch((error)=>{
//     console.log(error.name + ' ' + error.message)
// })


//another example of promise
const recordVideo1 = new Promise((resolve,reject)=>{
    resolve('this is video 1 recorded')
})

const recordVideo2 = new Promise((resolve,reject)=>{
    resolve('this is video 2 recorded')
})

const recordVideo3 = new Promise((resolve,reject)=>{
    resolve('this is video 3 recorded')
})

// Promise.all([
//     recordVideo1,
//     recordVideo2,
//     recordVideo3
// ]).then((message)=>{
//     console.log(message)
// })

Promise.race([
    recordVideo1,
    recordVideo2,
    recordVideo3
]).then((message)=>{
    console.log(message)
})