/* First Example */


//fetch('https://jsonplaceholder.typicode.com/users/1')
const emailRef = document.querySelector('.email')
console.log(emailRef)


//1. then
fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => {
    response.json().then(data => {
        console.log(data)
    })
})


//2. async await

