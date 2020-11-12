const person = {name:"ayon", age:14, job:"bloger", gfName:"sonali ahmed"};

// const { job, gfName, age } = person;
// const name = person.name;

// console.log(job, gfName, age);
// console.log(job, gfName, age); 

const numbers = [34, 56, 78, 234, 23, 767, 234,43];
const [first, second, ...remainingNumbers] = numbers;
console.log(remainingNumbers);
