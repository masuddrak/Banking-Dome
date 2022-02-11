document.getElementById('submitBtn').addEventListener('click',function(){
    const userEmailFild=document.getElementById('userEmail');
    const userEmail=userEmailFild.value;
    
    const userPasswordFild=document.getElementById('userPassword');
    const userPassword=userPasswordFild.value;
    
    if(userEmail=='sontan@baap.com' && userPassword=='secret'){
        window.location.href='banking.html'
    }
})