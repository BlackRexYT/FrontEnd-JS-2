/* First Example */


//fetch('https://jsonplaceholder.typicode.com/users/1')
const emailRef = document.querySelector('.email')

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





