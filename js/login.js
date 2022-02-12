// deposite
document.getElementById('diposittBtn').addEventListener('click',function(){
    const depositInput=document.getElementById('depositInput');
    const newDepositAmount=parseFloat(depositInput.value);
    
    const totalDiposit=document.getElementById('totalDiposit');
    const previousDepositAmount=parseFloat(totalDiposit.innerText);
    const newDepositeTotal=newDepositAmount+previousDepositAmount;
    totalDiposit.innerText=newDepositeTotal;
    // update blance
    const totalBlance=document.getElementById('totalBlance');
    const previusDepositBlence=parseFloat(totalBlance.innerText);
    const newDepositBlence=newDepositAmount+previusDepositBlence;
    totalBlance.innerText=newDepositBlence;
    
    
    
    
    
    
    
    
    
    // clear 
    depositInput.value=''
})