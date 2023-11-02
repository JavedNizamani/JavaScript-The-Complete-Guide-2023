const defaultResult = 0;
let currentResult = defaultResult;

//Gets input from input field
const getUserInputNumber = ()=>{
     return parseInt(userInput.value);
}
//Write Calculation Log
const createAndWriteOutput = (operator, resultBeforeCalc, calcNumber)=>{
     const clacDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
     outputResult(currentResult, clacDescription);          // from vendor file
}

const add = ()=>{
     const enteredNumber = getUserInputNumber();
     const initialResult = currentResult;
     currentResult = currentResult + enteredNumber;
     createAndWriteOutput('+', initialResult, enteredNumber);
     
}

const subtract = ()=>{
     const enteredNumber = getUserInputNumber();
     const initialResult = currentResult;
     currentResult = currentResult - enteredNumber;
     createAndWriteOutput('-', initialResult, enteredNumber);
}

const multiply = ()=>{
     const enteredNumber = getUserInputNumber();
     const initialResult = currentResult;
     currentResult = currentResult * enteredNumber;
     createAndWriteOutput('*', initialResult, enteredNumber);
}

const divide = ()=>{
     const enteredNumber = getUserInputNumber();
     const initialResult = currentResult;
     currentResult = currentResult / enteredNumber;
     createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);