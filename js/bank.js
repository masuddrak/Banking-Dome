document.getElementById('submitBtn').addEventListener('click',function(){
    // get user Email
    const userEmailFild=document.getElementById('userEmail');
    const userEmail=userEmailFild.value;
    // user password
    const userPasswordFild=document.getElementById('userPassword');
    const userPassword=userPasswordFild.value;
    // condition
    if(userEmail=='sontan@baap.com' && userPassword=='secret'){
        window.location.href='banking.html'
    }
})
