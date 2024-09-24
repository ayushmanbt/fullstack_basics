let p = (q) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if(!q) reject("Wrong response");
        resolve("An awaited response");
    }
    ), 100000
})

// async function a(){
//     try {
//         console.log(await p(false))
//     } catch (error) {
//         console.log("err: " + error)
//     }
// }


p(false)
    .then(res => console.log(res))
    .catch(err => console.log("err: " + err))
console.log("hello")

