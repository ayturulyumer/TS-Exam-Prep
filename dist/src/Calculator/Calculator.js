"use strict";
function calculator(n1, n2, operator) {
    let result = 0;
    switch (operator) {
        case "+":
            result = n1 + n2;
            break;
        case "-":
            result = n1 - n2;
            break;
        case "/":
            result = n1 / n2;
            break;
        case "*":
            result = n1 * n2;
            break;
    }
    return result;
}
const n1 = 5;
const n2 = 10;
const operator = "+";
const result = calculator(n1, n2, operator);
console.log(result.toFixed(2));
//# sourceMappingURL=Calculator.js.map