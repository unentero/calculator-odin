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
