const handleDOMContentLoaded = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', debounce(handleLog, 2000));
}

const handleLog = () => {
    console.log('Clicked');
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

const debounce = (fn, delay) => {
    let id;
    console.log('initial id: ', id);
    return (...args) => {
        console.log('prev id: ', id);
        if(id) clearTimeout(id);
        id = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}