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
} else{
    result="DIV/0!"
}
return result
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

