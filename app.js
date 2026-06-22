/* global add, subtract, multiply, divide, square, cube, squareRoot */
document.addEventListener('DOMContentLoaded', () => {
    const previousOperandTextElement = document.getElementById('previous-operand');
    const currentOperandTextElement = document.getElementById('current-operand');
    
    let currentOperand = '0';
    let previousOperand = '';
    let operation = undefined;
    let shouldResetScreen = false;

    const updateDisplay = () => {
        currentOperandTextElement.textContent = currentOperand;
        if (operation != null) {
            previousOperandTextElement.textContent = `${previousOperand} ${operation}`;
        } else {
            previousOperandTextElement.textContent = '';
        }
        
        // Add animation
        currentOperandTextElement.classList.remove('animate-pop');
        void currentOperandTextElement.offsetWidth;
        currentOperandTextElement.classList.add('animate-pop');
    };

    const clear = () => {
        currentOperand = '0';
        previousOperand = '';
        operation = undefined;
    };

    const backspace = () => {
        if (shouldResetScreen) return;
        if (currentOperand.length === 1 || (currentOperand.length === 2 && currentOperand.startsWith('-'))) {
            currentOperand = '0';
        } else {
            currentOperand = currentOperand.toString().slice(0, -1);
        }
    };

    const appendNumber = (number) => {
        if (currentOperand === '0' && number !== '.') {
            currentOperand = number;
            return;
        }
        if (number === '.' && currentOperand.includes('.')) return;
        if (shouldResetScreen) {
            currentOperand = number;
            shouldResetScreen = false;
            return;
        }
        currentOperand = currentOperand.toString() + number.toString();
    };

    const chooseOperation = (op) => {
        if (currentOperand === '') return;
        if (previousOperand !== '') {
            compute();
        }
        operation = op;
        previousOperand = currentOperand;
        currentOperand = '';
    };

    const compute = () => {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (operation) {
            case '+':
                computation = add(prev, current);
                break;
            case '-':
                computation = subtract(prev, current);
                break;
            case '×':
                computation = multiply(prev, current);
                break;
            case '÷':
                if (current === 0) {
                    computation = 'Error';
                } else {
                    computation = divide(prev, current);
                }
                break;
            default:
                return;
        }
        
        currentOperand = typeof computation === 'number' ? 
            (Number.isInteger(computation) ? computation : parseFloat(computation.toFixed(4))).toString() : 
            computation;
        operation = undefined;
        previousOperand = '';
        shouldResetScreen = true;
    };

    const executeSingleOp = (func) => {
        const current = parseFloat(currentOperand);
        if (isNaN(current)) return;
        
        let result = func(current);
        currentOperand = typeof result === 'number' ? 
            (Number.isInteger(result) ? result : parseFloat(result.toFixed(4))).toString() : 
            result;
        shouldResetScreen = true;
        updateDisplay();
    };

    // Event Listeners
    document.querySelectorAll('.key-num').forEach(button => {
        button.addEventListener('click', () => {
            appendNumber(button.getAttribute('data-num'));
            updateDisplay();
        });
    });

    document.querySelectorAll('[data-op]').forEach(button => {
        button.addEventListener('click', () => {
            chooseOperation(button.getAttribute('data-op'));
            updateDisplay();
        });
    });

    document.getElementById('btnEq').addEventListener('click', () => {
        compute();
        updateDisplay();
    });

    document.getElementById('btnClear').addEventListener('click', () => {
        clear();
        updateDisplay();
    });

    document.getElementById('btnBack').addEventListener('click', () => {
        backspace();
        updateDisplay();
    });

    // Single operand operations
    document.getElementById('btnSq').addEventListener('click', () => executeSingleOp(square));
    document.getElementById('btnCube').addEventListener('click', () => executeSingleOp(cube));
    document.getElementById('btnSqrt').addEventListener('click', () => {
        const current = parseFloat(currentOperand);
        if (current < 0) {
            currentOperand = 'Error';
            shouldResetScreen = true;
            updateDisplay();
        } else {
            executeSingleOp(squareRoot);
        }
    });

    updateDisplay();
});
