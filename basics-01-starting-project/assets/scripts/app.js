const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
function getUserNumberInput() {
  return parseInt(userInput.value);
}
const enteredNumber = getUserNumberInput();
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescreption = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescreption);
}
function WriteToLog(operationIdentif, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentif,
    prevResult: prevResult,
    number: operationNumber,
    newResult: newResult,
  };
  logEntries.push(logEntry);
  console.log(i,logEntry);
}
function calculateResult(calculationType) {
  if(calculationType !=='ADD' && calculationType !=='SUBSTRACT'
  && calculationType!=='MULTIPLY' && calculationType !=='DIVIDE' ||!enteredNumber){
    return;
  }
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if(calculationType === 'SUBSTRACT' ){
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if(calculationType === 'MULTIPLY'){
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if(calculationType === 'DIVIDE'){
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  // if(enteredNumber === 0)
  // {
  //   alert("can't use zero");
  // }
  createAndWriteLog(mathOperator, initialResult, enteredNumber);
  WriteToLog(calculationType, initialResult, enteredNumber, currentResult);
}
function add() {
  calculateResult('ADD');
}
function substract() {
  calculateResult('SUBSTRACT');
}
function multiply() {
  calculateResult('MULTIPLY');
}
function divide() {
  calculateResult('DIVIDE');
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
//let calculationDescription = `(${defaultResult}+ 10)`;
//MDN
