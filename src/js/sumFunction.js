const sumInput = document.getElementById('sumInput');
const sumResult = document.getElementById('sumResult');
const sumBtn = document.getElementById('sumBtn');
const resetBtn = document.getElementById('resetBtn');

// Sum function that takes variable number of arguments
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

sumBtn.addEventListener('click', () => {
    const input = sumInput.value.trim();
    if (!input) {
        sumResult.textContent = 'Please enter numbers separated by commas.';
        return;
    }

    // Parse the input into an array of numbers
    const numbers = input.split(',').map(Number);
    if (numbers.some(isNaN)) {
        sumResult.textContent = 'Invalid input. Please enter only numbers separated by commas.';
        return;
    }

    // Calculate the sum
    const result = sum(...numbers);
    sumResult.textContent = `Result: ${result}`;
});

resetBtn.addEventListener('click', () => {
    sumInput.value = '';
    sumResult.textContent = '';
});
