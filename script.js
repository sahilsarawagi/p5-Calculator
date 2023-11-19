let num1=0;
let num2=null;
let operator=null;


const numbers = document.querySelectorAll('.numbers');
const operators = document.querySelectorAll('.operator');
const equlaSign =document.querySelector('.equalSign');


// this function prints the value of variables
function valueCheck(){
    console.log(num1);
    console.log(num2);
    console.log(operator);
}

// this function listens when user clicks any number button and it assign value to variable 'num1' and 'num2'
numbers.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(`inside numbers  ${typeof(button.value)}`)
        if(!num1){ // &&!operator
            num1 = Number(button.value);
            console.log(`num1  ${num1}`)
        }else if(!num2){
            num2 = Number(button.value);
            console.log(`num2  ${num2}`)
        }
        valueCheck();
    });
});

// this function listens when user clicks the equal button 
equlaSign.addEventListener('click', () => {
        if(!num2){
            return
        }
        num1=calculation(num1,num2,operator);
        num2=null;
        operator=null;
        valueCheck();
    });


// this function listens when user clicks  any operator button and it assign value to variable 'operator'
operators.forEach((button) => {
    button.addEventListener('click', () => {   
    console.log(`inside operator  ${typeof(button.value)}`)
    valueCheck();
    if(num2){
        num1 = calculation(num1,num2,operator);
        console.log(`num1  ${num1}`)
        num2=null;
    }
    operator = button.value;
    valueCheck();
    });
});


// this function checks operation and perform it  
function calculation(num1,num2,operator){
    console.log(`inside calculation function  ${typeof(operator)}`)
    switch(operator) {
              case "+":
              return  add(num1,num2);
              case "-":
              return subtract(num1,num2);
              case "x":
              return multiplication(num1,num2);
              case "/":
              return division(num1,num2);
              default:
                console.log('NAN');
            }
}

// this function perform addition
function add(a,b){
    // console.log(`inside add vlaue of a  ${typeof(a)}`)
    // // console.log(`inside add value of b  ${typeof(b)}`)
    // c=a+b
    // console.log(`inside add a+b is ${c} and type of a+b is  ${typeof(c)}`)
    return a+b;
}

// this function perform subtraction
function subtract(a,b){
    return a-b;
}

// this function perform multiplication
function multiplication(a,b){
    return a*b;
}

// this function perform division
function division(a,b){
    return a/b;
}