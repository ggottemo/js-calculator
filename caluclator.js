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

//operate (operator, x, y )
//accepts an operator, and two numbers, calling the operator function
//on the two numbers
function operate(operator, x, y) {
    return operator(x, y);
}
