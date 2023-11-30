const counterElem = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

function onCounterChange(elem) {
    const isButton = elem.target.classList.contains('counter__button');

    if (!isButton) {
        return;
    }

    const action = elem.target.dataset.action;

    const oldValue = Number(counterValueElem.textContent);

    const newValue = action === 'decrease'
        ? oldValue - 1
        : oldValue + 1;

    localStorage.setItem('counterValue', newValue);

    counterValueElem.textContent = newValue;
};

counterElem.addEventListener('click', onCounterChange);

function onStorageChange(elem) {
    counterValueElem.textContent = elem.newValue;
};

window.addEventListener('storage', onStorageChange);

function onDocumentLoaded() {
    counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);