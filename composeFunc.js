//Compose và pipe funcion là 1 HOF (High Order Function) (Nhận 1 hàm và trả về 1 hàm khác)
//Ex:
const add = (x) => x + 2;
const multiply = (x) => x * 5;
console.log(multiply(add(2)));
//It's not a compose function

const compose = (...fns) => (val) => fns.reduceRight((prev, fn) => fn(prev), val); 
console.log(compose((val) => add(multiply(val)))(4)); //reduceRight sẽ thực hiện gọi hàm từ trong ra ngoài => gọi hàm multiply trước
//Kết quả là 22 (4 * 5 + 2)
//Hoặc có thể viết:
console.log('Compose result: ', compose(add, multiply)(4)); //22

//pỉpe thì sẽ tính ngược lại với compose, gọi hàm từ ngoài vào
const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val);
console.log('Pipe result: ', pipe(add, multiply)(4)); //30 ((4 + 2) * 5)

const divideBy = (divisor, num) => num / divisor;

const pipeResult2 = pipe(
    add,
    multiply,
    (val) => val + 10,
    (val) => divideBy(2, val)
)(5);

console.log('Pipe result 2: ', pipeResult2); //Kết quả: 22.5 (((5 + 2) * 5 + 10) / 2);

const text = "Hello cac ban minh la toi di code dao";
const splitArr = (txt) => txt.split(' ');
const count = (arr) => arr.length;

const wordCount = pipe(
    splitArr,
    count
)

console.log(wordCount(text));

const compose2 = (...fns) => (val) => fns.reduceRight((prev, fn) => fn(prev), val);
const pipe2 = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val);

//Clone an object before impure function mutates it
const scoreObj = { home: 0, away: 0}

const shallowClone = (obj) => Array.isArray(obj) ? [...obj] : {...obj};
const increaseHome = (obj) => {
    obj.home += 1;
    return obj;
}

const homeScore = pipe(
    shallowClone,
    increaseHome
)

console.log(homeScore(scoreObj));
console.log(scoreObj);
console.log(homeScore(scoreObj) === scoreObj)
