// deposite
document.getElementById('diposittBtn').addEventListener('click',function(){
    const withdrawInput=document.getElementById('depositInput');
    const depositAmount=withdrawInput.value;
    
    const totalDiposit=document.getElementById('totalDiposit');
    totalDiposit.innerText=depositAmount
    // clear 
    withdrawInput.value=''
})