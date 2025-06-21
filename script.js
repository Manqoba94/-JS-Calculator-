// Reference display element
const display = document.getElementById('display');

// Track if we have performed a calculation
let calculationDone = false;

function appendToDisplay(value) {
    console.log('Button pressed:', value);

    alert('You pressed:' + value);
  }

  function clearDisplay() {
    console.log('Clear Button pressed');

    alert('Clear button was clicked')
    
  }

function deleteLast() {
    console.log('Delete Button pressed');

    alert('Delete button was clicked')
}

function calculate() {
    console.log('Equals Button pressed');

    alert('Equals button was clicked');
    calculationDone = true;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Claculator loaded Successfully');
    console.log('Display elemt:', display);

    if (display) {
        console.log('Current display value:', display.value);
    }
});