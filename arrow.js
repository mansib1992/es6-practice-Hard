// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

const doubleIt = num => num * 2;

const add = (x, y) => x + y;

const doMath = (a, b) => {
    const multiply = a * b;
    const division = a / b;
    const result = multiply + division;
    return result;
}
const result = add(50, 507);
const result2 = doMath(6, 3);
console.log(result2);