const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const decimal = document.querySelector(".decimal");
const calculatorScreen = document.querySelector(".calculator-screen");
const clearBtn = document.querySelector(".all-clear");
const percent = document.querySelector(".percentage");

const updateScreen = (number)=>{
    calculatorScreen.value = number;
}

let prevNumber ="";
let calculationOperator ="";
let currentNumber ="0";

const inputNumber= (number)=>{
    if(currentNumber === "0"){
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

numbers.forEach((number)=>{
    number.addEventListener("click",(event) =>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

const inputOperator = (operator)=>{
    if(calculationOperator === ""){
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "";
}

operators.forEach((operator)=>{
    operator.addEventListener("click",()=>{
        inputOperator(event.target.value);
    })
})

const calculate = ()=>{
    let result="";

    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        case "%":
            result = parseFloat(prevNumber) % parseFloat(currentNumber);
            break;
        default :
            return;
    }
    currentNumber = result;
    calculationOperator = "";
}

equalSign.addEventListener("click",() =>{
    calculate();
    updateScreen(currentNumber);
})

const clearAll = ()=>{
    prevNumber ="";
    calculationOperator ="";
    currentNumber="0";
}

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot)=>{
    if(currentNumber.includes(".")){
        return;
    }
    currentNumber += dot;
}

decimal.addEventListener("click",()=>{
    inputDecimal(event.target.value);
    updateScreen(currentNumber);

})

inputpercent = ()=>{
    if(calculationOperator === "%"){
        return;
    }
    currentNumber /= 100;
}
percent.addEventListener("click",()=>{
    inputpercent();
    updateScreen(currentNumber);
})