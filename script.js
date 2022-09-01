/* First Example */


//fetch('https://jsonplaceholder.typicode.com/users/1')
// const emailRef = document.querySelector('.email')

/* DONT DO THEN U FUCKING IDIOT */

//1. then

// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then((response) => {
//     return response.json()
// })
// .then(data => {
//     console.log(data)
//     emailRef.innerHTML = data.email
// })


/* BETTER VERSION */


//2. async//await

// async function main(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
//     const data = await response.json()
//     emailRef.innerHTML = data.email
// }

// main()

const statusRef = document.querySelector('.status')
const videoRef = document.querySelector('.e')

function getSubStatus(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('VIP')
        }, 2000)
    })
}


//async method

function getVideo(subStatus){
    return new Promise((resolve, reject) => {
        if (subStatus === 'VIP'){
            resolve('Show video')
        }
        else if (subStatus === 'FREE'){
            resolve('Show trailer')
        }
        else{
            reject('no')
        }  
    })
}


async function main(){
    const status = await getSubStatus()
    statusRef.innerHTML = status
    try{
        console.log(await getVideo(status))
    }
    catch (e){
        console.log(e)
        videoRef.innerHTML = e
    }
}

main()


