// Reference display element
const display = document.getElementById('display');

// Track if we have performed a calculation
let calculationDone = false;

// Track if a calculation was just performed
let justCalculated = false;

function appendToDisplay(value) {
    console.log('Button pressed:', value);
    let currentValue = display.value;

    if (justCalculated && !isNaN(value)) {
        display.value = value;
        justCalculated = false;
        return;
    }

    // if current display shows 0 and user enters a number, we want to replace the 0
    if (currentValue === '0' && !isNaN(value)) {
        display.value = value;
    } else if (currentValue === '0' && value === '.') {
        display.value = currentValue + value;
    } else {
        display.value = currentValue + value;
    }

    // Reset the justCalculated flag when user starts typing
    justCalculated = false;

    console.log('Display updated to:', display.value);
}

function clearDisplay() {
    console.log('Clear Button pressed');
    display.value = '0';
    calculationDone = false;
    justCalculated = false;
}

function deleteLast() {
    console.log('Delete Button pressed');
function deleteLast() {
    console.log('Delete Button pressed');

    let currentValue = display.value;

    // if there is only one character, clear the display to 0
    if (currentValue.length <= 1 || currentValue === '0') {
        display.value = '0';
    } else {
        display.value = currentValue.slice(0, -1);
    }
}
}

function calculate() {
    console.log('Equals Button pressed');
    try {
        display.value = eval(display.value);
        calculationDone = true;
        justCalculated = true;
    } catch (e) {
        display.value = 'Error';
        calculationDone = false;
        justCalculated = false;
document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculator loaded Successfully');
    console.log('Display element:', display);

    if (display) {
        display.value = '0';
        console.log('Current display value:', display.value);
    }
}); }
};