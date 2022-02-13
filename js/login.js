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
});
// witdrow balance
const witdrawBtn=document.getElementById('witdrawBtn').addEventListener('click', function(){
    const withdrawInput=document.getElementById('withdrawInput');
    const witdrawAmountText=parseFloat(withdrawInput.value);
    const widrawTotal=document.getElementById('widrawTotal');
    const previusWidraw=parseFloat(widrawTotal.innerText);
    const totalWidraw=previusWidraw+witdrawAmountText;
    widrawTotal.innerText=totalWidraw;

// case balance
    const totalBlance=document.getElementById('totalBlance');
    const caseBalance=parseFloat(totalBlance.innerText);
    const totalCaseBalance=caseBalance-witdrawAmountText;
    totalBlance.innerText=totalCaseBalance;

    withdrawInput.value=''
})  
