alert("Selamat menggunakan Kalkulator Arya Veda!")

const kalkulator = {
    firstNumber: null,
    secondNumber: false,
    displayNumber:'0',
    operator: null,
}

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = kalkulator.displayNumber;
    
};

function resetDisplay() {
    kalkulator.displayNumber='0',
    kalkulator.firstNumber = null,
    kalkulator.secondNumber= false,
    kalkulator.operator=null
};

function inputDigit (digit) {
    if (kalkulator.displayNumber === '0'){
        kalkulator.displayNumber = digit;
    } else {
        kalkulator.displayNumber += digit;
    }


}

const tombol = document.querySelectorAll('.button');
for (let button of tombol) {
    button.addEventListener('click',function(event){
    const target = event.target;

    if (target.classList.contains('clear')) {
        resetDisplay();
        updateDisplay();
        return;
    }
    if (target.classList.contains('negative')) {
        inverseNumber();
        updateDisplay();
        return;
    }
    if (target.classList.contains('equals')){
        performCalculation();
        updateDisplay();
        return;
    }
    if (target.classList.contains('operator')){
        handleOperator(target.innerText);
        
        return;
    }
    inputDigit(target.innerText)
    updateDisplay();
    })
}


function inverseNumber() {
    if (kalkulator.displayNumber === '0'){
        return;
    }
    kalkulator.displayNumber = kalkulator.displayNumber *-1;
}

function handleOperator (operator) {
    if (!kalkulator.secondNumber){
        kalkulator.operator = operator;
        kalkulator.secondNumber = true;
        kalkulator.firstNumber = kalkulator.displayNumber;
        kalkulator.displayNumber = '0';
    } else {
        alert('sekali aja anjingg')
    }
}

function performCalculation (){
    if (kalkulator.firstNumber == null || kalkulator.operator == null){
        alert('dipencet dulu lah gblk')
        return;
    }

    let result = 0;
    if (kalkulator.operator === "+"){
        result = parseInt(kalkulator.firstNumber) + parseInt(kalkulator.displayNumber);
    } else {
        result = parseInt(kalkulator.firstNumber) - parseInt(kalkulator.displayNumber)
    }
    

    const history = {
        firstNumber: kalkulator.firstNumber,
        secondNumber: kalkulator.displayNumber,
        operator: kalkulator.operator,
        result:result
    }

    putHistory(history);
    kalkulator.displayNumber = result;
    renderHistory();
}