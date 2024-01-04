const handleDOMContentLoaded = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', throttle(handleLog, 2000));
}

const handleLog = () => {
    console.log('Clicked');
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

const throttle = (fn, delay) => {
    console.log('Initial throttle called');
    let lastTime = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - lastTime < delay) return;
        lastTime = now;
        fn(...args);
    }
}