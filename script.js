const currentText = document.getElementById("current");
const previousText = document.getElementById("prevCurrent");

function appendToCalcDisplay(x) {
    if (currentText.innerText == 0) {
        currentText.innerText = x;
        previousText.innerText = x;
    } else {
        previousText.innerText += x;
        currentText.innerText += x;
    }
}

function clearDisplay() {
    currentText.innerText = 0;
    previousText.innerText = 0;
}

function add() {
    // FIXME: Work on 'add' function
}

function multiply() {
    // FIXME: Work on 'multiply' function
}

function divide() {
    // FIXME: Work on 'divide' function
}

function subtract() {
    // FIXME: Work on 'subtract' function
}

function decimal() {
    // FIXME: Work on 'decimal' function
}