// calculator functions
const add = function(a,b){
let result;
result = a+b;
return result
};
const substract = function(a,b){
let result;
result = a-b;
return result
};
const multiply = function(a,b){
let result;
result = a*b;
return result
};
const divide = function(a,b){
let result;
if(b != 0){
    result = a/b
}
return result.toFixed(3)
};

// operate function
const operate = function(numA,numB,operator){
    switch (operator){
        case "+": 
            return add(numA,numB);
        case "-": 
            return substract(numA,numB);
        case "*": 
            return multiply(numA,numB);
        case "/": 
            return divide(numA,numB);
    }
}

const calculator = function(){
    let firstNumber;
    let secondNumber;
    let operator;
    let result;
    
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
    
    
    //displays
    const dispTop = document.getElementById("display-top");
    const dispBottom = document.getElementById("display-bottom");
    //buttons
    const btnClear = document.getElementById("clear");
    const btnMod = document.getElementById("mod");
    const btnDelete = document.getElementById("delete");
    const btnDivide = document.getElementById("divide");

    const btnSeven = document.getElementById("seven");
    const btnEight = document.getElementById("eight");
    const btnNine = document.getElementById("nine");
    const btnMultiply = document.getElementById("multiply");

    const btnFour = document.getElementById("four");
    const btnFive = document.getElementById("five");
    const btnSix = document.getElementById("six");
    const btnAdd = document.getElementById("add");

    const btnOne = document.getElementById("one");
    const btnTwo = document.getElementById("two");
    const btnThree = document.getElementById("three");
    const btnMinus = document.getElementById("minus");

    const btnAbs = document.getElementById("abs");
    const btnZero = document.getElementById("zero");
    const btnPoint = document.getElementById("point");
    const btnEqual = document.getElementById("equal");
    // this updates the display in the calculator
    const updateDisplay = function(){
        dispTop.textContent = `${firstNumber}${operator}${secondNumber}`
        if (operator == ''){
            dispBottom.textContent = firstNumber
        }else{
            dispBottom.textContent = secondNumber
        }
    }
    //numeric buttons
    btnSeven.addEventListener('click',()=>{
        if (operator == ''){
            firstNumber += '7'
        } else {
            secondNumber += '7'
        }
        updateDisplay();
    });
    btnEight.addEventListener('click',()=>{
        if (operator == ''){
            firstNumber += '8'
        } else {
            secondNumber += '8'
        }
        updateDisplay();
    });
    btnNine.addEventListener('click',()=>{
        if (operator == ''){
            firstNumber += '9'
        } else {
            secondNumber += '9'
        }
        updateDisplay();
    });
    btnFour.addEventListener('click',()=>{
        if (operator == ''){
            firstNumber += '4'
        } else {
            secondNumber += '4'
        }
        updateDisplay();
    });
    btnFive.addEventListener('click',()=>{
        if (operator == ''){
            firstNumber += '5'
        } else {
            secondNumber += '5'
        }
        updateDisplay();
    });
    btnSix.addEventListener('click',()=>{
        if (operator == ''){
            firstNumber += '6'
        } else {
            secondNumber += '6'
        }
        updateDisplay();
    });
    btnOne.addEventListener('click',()=>{
        if (operator == ''){
            firstNumber += '1'
        } else {
            secondNumber += '1'
        }
        updateDisplay();
    });
    btnTwo.addEventListener('click',()=>{
        if (operator == ''){
            firstNumber += '2'
        } else {
            secondNumber += '2'
        }
        updateDisplay();
    });
    btnThree.addEventListener('click',()=>{
        if (operator == ''){
            firstNumber += '3'
        } else {
            secondNumber += '3'
        }
        updateDisplay();
    });
    btnZero.addEventListener('click',()=>{
        if (operator == ''){
            firstNumber += '0'
        } else {
            secondNumber += '0'
        }
        updateDisplay();
    });
    //operator buttons
    function resolve(){
        if(secondNumber==0 && operator=='/'){
            dispTop.textContent = "Div by 0 Error"
            dispBottom.textContent = ''
            firstNumber = '';
            secondNumber = '';
            operator = '';
        } else if((secondNumber=='' && operator!='')||(operator!='' && firstNumber=='')){
            dispTop.textContent = "Syntax Error"
            dispBottom.textContent = ''
            firstNumber = '';
            secondNumber = '';
            operator = '';
        }else{
            result=operate(Number(firstNumber),Number(secondNumber),operator);
            firstNumber = result;
            secondNumber = '';
            operator = '';
            updateDisplay();
        }
    }

    btnAdd.addEventListener('click',()=>{
        if (operator == ''){
            operator = '+'
        } else {
            resolve();
            operator = '+'
        }
        updateDisplay();
    });
    btnMinus.addEventListener('click',()=>{
        if (operator == ''){
            operator = '-'
        } else {
            resolve();
            operator = '-'
        }
        updateDisplay();
    });
    btnMultiply.addEventListener('click',()=>{
        if (operator == ''){
            operator = '*'
        } else {
            resolve();
            operator = '*'
        }
        updateDisplay();
    });
    btnDivide.addEventListener('click',()=>{
        if (operator == ''){
            operator = '/'
        } else {
            resolve();
            operator = '/'
        }
        updateDisplay();
    });
    //equal button
    
    btnEqual.addEventListener('click',()=>{
        resolve();
    });
    
}

calculator();