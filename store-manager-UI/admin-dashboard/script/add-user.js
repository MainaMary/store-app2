
//Back button
const backBtn= document.querySelector('.back-user-btn');
backBtn.addEventListener('click', ()=>{
    window.location.href="../html/users-management.html"
})



//form input
const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const username= document.querySelector('.add-username').value;
const password= document.querySelector('.add-userpswd').value;
const Role= document.querySelector('.user-role').value;
console.log(username)
console.log(password)
console.log(Role)
})
