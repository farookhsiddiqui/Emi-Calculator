const principal = document.getElementById('loan-amount-input');
const interest = document.getElementById('interest-rate-input');
const tenure = document.getElementById('months-to-pay-input');
const calculate = document.getElementById('calculate');
const emi = document.getElementById('emi');


function calculateEMI(){
    if(principal.value === '' || interest.value === '' || tenure.value === ''){
        alert('Please enter all the values');
        return;
    }else{
        const p = principal.value;
        const r = interest.value / 1200;
        const n = tenure.value;
        const emiValue = (p * r * (1+r) ** n) / ((1+r) ** n-1);
        emi.textContent = emiValue.toFixed(2);
    }
}

calculate.addEventListener('click', calculateEMI)




