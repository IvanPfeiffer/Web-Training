let total = 0.00;
let inputs = [];
let input = null;
let countNumbers = 0;
let countSymbols = 0;
let operation = null;
let completeOperation = ""
let totalsHistory = [];
let isSymbol = false;
let result = false;
let operationWithTotal = false;
let val = []
let inputFinal = "";
const display = document.querySelector("#display")
const numberButton = document.querySelectorAll("#number")



for(let button of numberButton){
    button.addEventListener("click", function(e){
    operationWithTotal = false;
    if(result){
        inputs = []
        countNumbers = 0
        console.log(inputs)
        }
        console.log(this.value)
        isSymbol = false
        result = false;
        if(!isSymbol){
            input = this.value
            val.push(input)
            console.log(val)
            
        } else {
            console.log("hola")
            
        }
        inputFinal = updateValue(val);
        console.log(inputFinal)
        display.innerText = `${inputFinal}.00`
        total = parseFloat(inputFinal)
    })
}


function updateValue(value){
    let number = ""
    value.forEach(element => {
        number += element;
    });
    return parseFloat(number)
}

function operationValues(){
    if(!result){
        inputs.push(inputFinal);
    } else {
        inputs.push(total)
        inputs.shift()
        inputs.shift()
        countNumbers = 1
    }
    countNumbers += 1;
    console.log(inputs)
}

const cButton = document.querySelector("#C");
const cEButton = document.querySelector("#CE")

cButton.addEventListener("click", clearCalc);
cEButton.addEventListener("click", clearLastCalc);
function clearCalc() {
    total = "0.00";
    isSymbol = false;
    result= false;
    operationWithTotal = false;
    display.innerText = total
    inputs = []
    totalsHistory = []
    val = []
    countNumbers = 0
    countSymbols = 0;
    console.clear()
}
function clearLastCalc(){
    if(isSymbol){
        operation = null
        countSymbols -= 1;
    } else {
        inputs.pop()
        console.log(inputs)
        display.innerText = inputs[length];
    }
}


function sum(){
    operation = "sum"
    isSymbol = true;
    result = false
    countSymbols += 1;
    if(operationWithTotal){
        chainCalculation()
    } else{
        operationValues()
    }
    
    val = []
}
function sqr(){
    operation = "sqr";
    isSymbol = true
    result = false;
    countSymbols +=1;
    if(operationWithTotal){
        chainCalculation()
    } else{
        operationValues()
    }
    total = inputs[countNumbers-1]*inputs[countNumbers-1];
    completeOperation = `${inputs[countNumbers-1]}^2=${total}`;
    display.innerText = total
    operation = null
    inputs=[]
    inputs.push(total)
    totalsHistory.push(completeOperation)
    console.log(totalsHistory)
    val = []

}
function minus(){
    operation = "minus"
    isSymbol = true;
    result = false
    countSymbols += 1;
    if(operationWithTotal){
        chainCalculation()
    } else{
        operationValues()
    }
    val = []
}
function times(){
    operation = "times"
    isSymbol = true;
    result = false
    countSymbols += 1;
    if(operationWithTotal){
        chainCalculation()
    } else{
        operationValues()
    }
    val = []
}
function div(){
    operation = "div";
    isSymbol = true;
    result = false
    countSymbols += 1;
    if(operationWithTotal){
        chainCalculation()
    } else{
        operationValues()
    }
    val = []
}
const sumButton = document.querySelector("#plus");
sumButton.addEventListener("click", sum);

const minusButton = document.querySelector("#minus");
minusButton.addEventListener("click", minus);

const timesButton = document.querySelector("#mult");
timesButton.addEventListener("click", times);

const divButton = document.querySelector("#div");
divButton.addEventListener("click", div)

const sqrButton = document.querySelector("#squared");
sqrButton.addEventListener("click", sqr)



const equal = document.querySelector("#equal");
equal.addEventListener("click", function(){
    countSymbols +=1;
    operationValues();
    result = true;
    operationWithTotal = true;
    // isSymbol = true
    calculation();
    inputs.push(total)
    display.innerText = `${total}`
    operation = null;
    totalsHistory.push(completeOperation)
    console.log(totalsHistory)
    val = []

});

function chainCalculation(){
    let lastTotal = inputs.pop();
    inputs = [];
    inputs.push(lastTotal);
    countNumbers = 1
};

function calculation(){
    switch (operation){
        case "sum":
            total = inputs[countNumbers-2] + inputs[countNumbers-1];
            completeOperation = `${inputs[countNumbers-2]} + ${inputs[countNumbers-1]} = ${total}`;
            break
        case "minus":
            total = inputs[countNumbers-2] - inputs[countNumbers-1];
            completeOperation = `${inputs[countNumbers-2]} - ${inputs[countNumbers-1]} = ${total}`;
            break
        case "times":
            total = inputs[countNumbers-2] * inputs[countNumbers-1];
            completeOperation = `${inputs[countNumbers-2]} * ${inputs[countNumbers-1]} = ${total}`;
            break
        case "div":
            total = inputs[countNumbers-2] / inputs[countNumbers-1];
            completeOperation = `${inputs[countNumbers-2]} / ${inputs[countNumbers-1]} = ${total}`;
            break
        default:
            console.log("No valid operation")
    }
}
 

//TODO: Remainder of operations
//TODO: Delete button.
//TODO: History with buttons.
//TODO: KEYBOARD OPERATIONS
//TODO: ADD object with functions in another file. 
