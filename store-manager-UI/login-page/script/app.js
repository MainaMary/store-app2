const form = document.querySelector('.log-in-form');
const password= document.querySelector('.password').value;
const username= document.querySelector('.username').value;


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    if(password=='student' && username =='1234'){
        console.log('1234')
        window.location.href="../html/login.html"
    }
})