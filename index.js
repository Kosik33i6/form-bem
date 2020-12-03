const getElemnts = (selectors) => {
    console.log(selectors);
    const elements = [...document.querySelectorAll(selectors)];
    if(elements.length === 1) {
        const element = elements.shift();
        return element;
    }
    return elements;
}

const inputs = getElemnts('.form__input, .form__input-checkbox');
const button = getElemnts('.btn');
const form = getElemnts('.form');
const loader = getElemnts('.loader');

function isValueValid(event) {

    const currentInput = event.target;

    const currentLength = event.target.value.length;

    const minLength = Number(currentInput.getAttribute('minlength'));

    currentInput.classList.toggle('form__input--active');

    if(currentLength < minLength) {
        currentInput.classList.add('form__input--invalid');
    } else {
        currentInput.classList.remove('form__input--invalid');
    }
}

function activeInput(event) {
    console.log(event.target.checked);
    isValueValid(event);
}
function activeElement(event) {
    const button = event.target;
    button.classList.add('btn--disabled');
}

inputs.forEach(element => {
    element.addEventListener('input', activeInput);
});

button.addEventListener('mousedown', activeElement)