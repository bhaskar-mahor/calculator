let numbers = document.querySelectorAll('.number');
let signs = document.querySelectorAll('.sign');
let ac = document.getElementsByClassName('ac')[0];
let flag = false;
let symbol;
let symbol_code;
let current_number='';
let displayText = '';
let expression='';

// click event listener on numbers
numbers.forEach((el)=>{
    el.addEventListener('click',(element)=>{
        if(flag){
            displayText += ` ${current_number} ${symbol}`;
            if(symbol_code == 43){
                expression += `${current_number} + `;
            }else if(symbol_code == 8722){
                expression += `${current_number} - `;
            }else if(symbol_code == 215){
                expression += `${current_number} * `;
            }else if(symbol_code == 247){
                expression += `${current_number} / `;
            }else if(symbol_code == 61){
                /*
                in progress
                */ 

            }
            current_number = '';
            flag = false;
        }
        current_number += element.target.innerText;
        document.getElementsByClassName("output")[0].innerHTML = `${displayText} ${current_number}`; 
        if(expression){
            calculate(expression+current_number);
        }
    });
});

// Click event listener on every sign
signs.forEach((el)=>{
    el.addEventListener('click',(element)=>{
        symbol_code = element.target.innerText.charCodeAt(0);
        symbol = element.target.innerHTML;
        document.getElementsByClassName("output")[0].innerHTML = `${displayText} ${current_number} ${element.target.innerHTML}`;
        flag = true;
    });
});

// function to calculate and hold result in accumulator
function calculate(args){
    console.warn(args);
    let result = eval(args);
    document.getElementsByClassName("result")[0].innerHTML = result;
    return result;
}

ac.addEventListener('click',(e)=>{
    expression = '';
    current_number = '';
    displayText = '';
    document.getElementsByClassName("result")[0].innerHTML = '';
    document.getElementsByClassName("output")[0].innerHTML = '';  
})