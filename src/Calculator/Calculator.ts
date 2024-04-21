function calculator(n1: number, n2: number, operator: string): number {
  let result: number = 0;
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

const n1: number = 5;
const n2: number = 10;
const operator: string = "+";

const result = calculator(n1, n2, operator);
console.log(result.toFixed(2));
