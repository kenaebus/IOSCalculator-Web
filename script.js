console.log("Working!");

class Calculator {
    constructor(currentText) {
        this.currentText = currentText
        
    }

    clear() {

    }


    append() {

    }

    update() {

    }

    calculate() {

    }
}


const currentText = document.getElementById("current")
const numberButtns = document.querySelectorAll('[data-number]')
const operationBttns = document.querySelectorAll('[data-operation')
const equalsBttn = document.querySelector('[data-equals')

const calculator = Calculator(currentText);