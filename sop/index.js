const counterElem = document.querySelectorAll('.counter__button');
const counterValueElem = document.querySelectorAll('.counter__value');

function onCounterChange(elem,index) {
    
    const action = elem.dataset.action;
    console.log(elem.dataset.action);
    const counterValue = elem.parentElement.querySelector('.counter__value');

    const oldValue = Number(counterValue.textContent);

    const newValue = action === 'decrease'
        ? oldValue - 1
        : oldValue + 1;
        let counterValueArray =[];
        counterValue.textContent = newValue;
        counterValueElem.forEach((elem, index)=>{
            counterValueArray.push(elem.textContent);
            
        });
    localStorage.setItem('counterValue', JSON.stringify(counterValueArray));

    
};

//counterElem.addEventListener('click', onCounterChange);
counterElem.forEach((elem, index) => {
   elem.addEventListener('click',function(){
    onCounterChange(elem,index);
});
  });
function onStorageChange(elem) {
    counterValueElem.textContent = elem.newValue;
};

window.addEventListener('storage', onStorageChange);

function onDocumentLoaded() {
    counterValueElem.forEach((counterValue, index) => {
        
        let stringifyData = JSON.parse(localStorage.getItem('counterValue'));
        let array = Object.keys(stringifyData).map((key) => [key, stringifyData[key]]);
        counterValue.textContent = stringifyData.at(index);
      });
  
};

document.addEventListener('DOMContentLoaded', onDocumentLoaded);