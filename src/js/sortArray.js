const arrayInput = document.getElementById('arrayInput');
const sortResult = document.getElementById('sortResult');
const sortBtn = document.getElementById('sortBtn');
const resetBtn = document.getElementById('resetBtn');

sortBtn.addEventListener('click', () => {
    const input = arrayInput.value.trim();
    if (!input) {
        sortResult.textContent = 'Please enter a valid array of numbers.';
        return;
    }

    // Parse the input into an array of numbers
    const arr = input.split(',').map(Number);
    if (arr.some(isNaN)) {
        sortResult.textContent = 'Invalid input. Please enter only numbers separated by commas.';
        return;
    }

    // Sorting the array without using built-in functions (Bubble Sort)
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    sortResult.textContent = `Sorted Array: ${arr.join(', ')}`;
});

resetBtn.addEventListener('click', () => {
    arrayInput.value = '';
    sortResult.textContent = '';
});
