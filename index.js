const inputs = [...document.querySelectorAll('.form__input')];

function isValueValid(currentInput, currentLength, minLength) {
    if(currentLength < minLength) {
        currentInput.classList.add('form__input--invalid');
    } else {
        currentInput.classList.remove('form__input--invalid');
    }
}

function isInputActive(input, inputValueLength) {
    if (inputValueLength > 0) {
        input.classList.add('form__input--active');
    } else {
        input.classList.remove('form__input--active');
    }
}

function activeInput(event) {

    const currentInput = event.target;
    const currentLength = event.target.value.length;
    const minLength = Number(currentInput.getAttribute('minlength'));

    isValueValid(currentInput, currentLength, minLength);
    isInputActive(currentInput, currentLength);

}
function addLodingClass(event) {
    button.classList.add('btn--disabled');
}

inputs.forEach(element => {
    element.addEventListener('input', activeInput);
});
