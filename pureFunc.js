//Pure function
//A part of the functional programming paradigm

//Why write pure function?
//1. Clean code
//2. Easy to test
//3. Easy to debug
//4. Decoupled and independent
//5. Could be added to your utility function

//Rule for pure function:
//1. The same input always have the same output
//2. No side effect
//3. Pure function must have 1 at least parameter
const sum = (a, b) => a + b; //sum() is a pure function because it depend just only on the 2 parameters a and b and has no side effect
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
//We can replace the function with the output
//This is called "referential transparency" Ex: sum(3, 5). You can replace the function with the output.
//Ex: var a = 5; b = 8; var sum = a + b. You can replace sum = a + b with sum = 13

const z = 5;
const sumHasSideEffect = (x, y) => x + y + z;
console.log(sumHasSideEffect(2, 2));
//The result will be 9. So the result not only based on the parameter but also based on the variable outside the scope.
//So this is an impure function

//Pure function cannot:
//Access the database, API, file system, storage, etc...
//Modify the DOM

//Impure functions
//Ex1:
var t = 5;
const increase = () => t += 1;
console.log(increase()); 
console.log(t); //Biến t bị thay đổi sau khi truyền => Impure function
//Cách khắc phục:
const increase2 = (n) => n + 1;

//Ex2:
const myArray = [1, 2, 3];
console.log('Initial array: ', myArray);
const addToArray = (arr, data) => arr.push(data);
addToArray(myArray, 4); //[1, 2, 3, 4] => myArray bị thay đổi
console.log('Array after call func: ', myArray); //Do ở đây, đối số truyền vào hàm là 1 mảng, 
//do mảng là kiểu tham chiếu nên khi push giá trị vào thì mảng bị thay đổi sau khi gọi hàm addToArray => impure function
//Cách khắc phục:
const myArray2 = [1, 2, 3];
console.log('Initial array 2: ', myArray2);
const addToArray2 = (arr, data) => [...arr, data]; //Toán tử spread làm cho mảng ban đầu không bị thay đổi
console.log(addToArray2(myArray2, 5));
console.log('Array after call func: ', myArray2); //[1, 2, 3] => myArray không thay đổi

//These common High Order Function is pure function
const oneToFive = [1, 2, 3, 4, 5];
const oddToFive = oneToFive.filter(num => num % 2 !== 0);
console.log(oddToFive);

const multiplyByTwo = oneToFive.map(elm => elm * 2);
console.log(multiplyByTwo);

const sumOneToFive = oneToFive.reduce(((accum, elm) => accum + elm), 0);
console.log(sumOneToFive);



