const display = document.getElementById('display');

let calculationDone = false;
let justCalculated = false;

function appendToDisplay(value) {
    console.log('Button pressed:', value);
    let currentValue = display.value;

    if (justCalculated && !isNaN(value)) {
        display.value = value;
        justCalculated = false;
        return;
    }

    if (currentValue === '0' && !isNaN(value)) {
        display.value = value;
    } else if (currentValue === '0' && value === '.') {
        display.value = currentValue + value;
    } else if (value === '.') {
        let lastNumber = currentValue.split(/[\+\-\*\/]/).pop();
        if (!lastNumber.includes('.')) {
            display.value = currentValue + value;
        }
    } else {
        display.value = currentValue + value;
    }

    justCalculated = false;
    console.log('Display updated to:', display.value);
}

function clearDisplay() {
    console.log('Clear Button pressed');
    display.value = '0';
    calculationDone = false;
    justCalculated = false;

    display.style.backgroundColor = 'white';
    setTimeout(() => {
        display.style.backgroundColor = '';
    }, 150);
}

function deleteLast() {
    console.log('Delete Button pressed');
    let currentValue = display.value;

    if (currentValue.length <= 1 || currentValue === '0') {
        display.value = '0';
    } else {
        display.value = currentValue.slice(0, -1);
    }
}

function calculate() {
    console.log('Equals Button pressed');
    try {
        display.value = eval(display.value);
        justCalculated = true;
        calculationDone = true;
    } catch (error) {
        alert('Invalid expression!');
    }
}

document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    if (event.key >= '0' && event.key <= '9') {
        appendToDisplay(event.key);
    } else if (event.key === '.') {
        appendToDisplay('.');
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        if (event.key === '/') event.preventDefault();
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        deleteLast();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculator loaded Successfully');
    if (display) {
        display.value = '0';
    }
});
