//IIFE: Imediately-Invoked Function Expression

(function myIIFE() {
    console.log(num);
    num++;
    return num < 5 ? myIIFE(num) : console.log('Finished');
})(num = 1);

//Scope of IIFE
const x = 10;
const helloFunc = () => "Hello world";

(() => {
    const x = 10;
    console.log(x);
    const helloFunc = () => "Hello world IIFE";
    console.log(helloFunc());
})(); //IIFE sẽ lấy scope gần nhất mà nó có. 
//Khi ta bỏ đi dòng định nghĩa x và helloFunc trong hàm IIFE thì nó sẽ lấy giá trị x và helloFunc nằm ở scope bên ngoài nó

console.log(x);
console.log(helloFunc());

//IIFE + Closure
const incresement = (() => {
    let counter = 0;
    console.log(counter);
    const credits = () => {
        console.log(`I have ${counter} (credits) coins`);
    }
    return () => {counter++; credits(counter)}
})();
//Ở lần đầu chạy sẽ chỉ log ra counter, do hàm increasement là IIFE fucntion nên nó chỉ chạy duy nhất lần đầu tiên
incresement();
incresement();
//credits(3) //Refference error

//Module pattern
const Score = (() => {
    let count = 0;
    return {
        current: () => { return count; },
        increase: () => { count++; },
        reset: () => { count = 0; }
    }
})();

Score.increase();
console.log(Score.current());
Score.reset();
console.log(Score.current());

//Revealing pattern
const Game = (() => {
    let score = 0;
    const current = () => console.log(`Game score is ${score}`);
    const increase = () => { score++; }
    const reset = () => { score = 0; }
    return {
        current,
        increase,
        reset
    }
})();

Game.increase();
Game.current();
Game.reset();
Game.current();

//Injecting a namespace object
((namespace) => {
    namespace.count = 0;
    namespace.current = function() { return `Current count is: ${this.count}` };
    namespace.increase = function() { this.count++ };
    namespace.reset = function() { this.count = 0 };
})(window.App = window.App || {});

App.increase();
console.log(App.current());

