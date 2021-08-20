// Purpose: A web based calculator app to demonstrate
// use of javascript and basic math.

//          BASIC MATH FUNCTIONS        //
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function square(x) {
    return x ** 2;
}
function mod(x, y) {
    return x % y;
}
//global bool for adding spaces in display function.
var isOp = true;
//Create a calculator object to store numbers and operator
const calculator = {
    firstNum : '',
    secondNum: '',
    //Store both operator and symbol for operation for easier 
    //parsing of second num
    operator : null,
    operatorSymbol: null,
    setFirst : function(x) {
        if(x.indexOf('.') != -1) //If String has decimal, number is a float
            this.firstNum = parseFloat(x);
        else this.firstNum = parseInt(x);
        console.log('First Num: ' + this.firstNum);
    },
    setSecond: function() {
        let display = document.getElementById('display');
        let index = display.innerText.indexOf(calculator.operatorSymbol);
        console.log('Index:' + index);
        let secondHalf = display.innerText.substring(index+2)
        if (secondHalf.indexOf('.') != -1) //Checking if second half is float.
            this.secondNum = parseFloat(secondHalf);
        else 
        this.secondNum = parseInt(secondHalf);
    },
    setOperator : function(x) {
        this.operator = x;
    },
    setOperatorSymbol: function(x) {
        this.operatorSymbol = x;
    },
    // Clear stored info
    reset : function() {
        this.firstNum = '';
        this.secondNum = '';
        this.operator = null;
        this.operatorSymbol = null;
    },
};

//operate (operator, x, y )
//accepts an operator, and two numbers, calling the operator function
//on the two numbers
function operate(operator, x, y) {
    window[operator](x, y);
}
//display(int x) -> Updates display with number or operator.
//TODO: Check if already a number, and edit instead
function display(x) {
    let display = document.getElementById('display');
    //Check if an operator has been chosen to add space
    if (isOp) {
        calculator.setFirst(display.innerText);
        display.innerHTML += '&nbsp' + x + '&nbsp';
    }
    else {
        display.innerText += x;
        isOp = true;
    }
}

function clearDisplay(){
    let display = document.getElementById('display');
    display.innerHTML = "";
    calculator.reset();
}

//addListeners() -> Function that adds on click event listeners
//based on the button clicked.
function addListeners() {
    let buttons = document.getElementById('buttons').children;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (e) {
            switch (e.target.id) {
                case 'item-1':          // CLEAR
                    console.log('c');
                    clearDisplay();
                    break;
                case 'item-2':          // SQUARE
                    console.log('x^2');
                    calculator.setOperator('square');
                    break;
                case 'item-3':          // MOD
                    console.log('%');
                    calculator.setOperator('mod');
                    calculator.setOperatorSymbol('%');
                    display('%');
                    break;
                case 'item-4':          // DIVIDE
                    console.log('/');
                    calculator.setOperator('divide');
                    calculator.setOperatorSymbol('/');
                    break;
                case 'item-8':          // MULTIPLY
                    console.log('x');
                    calculator.setOperator('multiply');
                    calculator.setOperatorSymbol('x');
                    break;
                case 'item-12':         // SUBTRACT
                    console.log('-');
                    calculator.setOperator("subtract");
                    calculator.setOperatorSymbol('-');
                    break;
                    case 'item-16':         // ADD
                    calculator.setOperator("add")
                    calculator.setOperatorSymbol('+');
                    break;
                // case 'item-18':         // DECIMAL
                //     console.log('.');
                //     break;
                case 'item-19':         // OPERATE
                    if (calculator.operator != null) {
                        calculator.setSecond();
                        console.log("Second num " + calculator.secondNum);
                    }
                    console.log('=');
                    break;
            
                default:
                    isOp = false;
                    display(e.target.innerText);
                    break;
            }
        });
    }
}
addListeners();