const numberToStringMap = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];

const numberInput = document.getElementById('numberInput');
const result = document.getElementById('result');
const convertBtn = document.getElementById('convertBtn');
const resetBtn = document.getElementById('resetBtn');

convertBtn.addEventListener('click', () => {
    const input = numberInput.value;
    let output = '';

    for (const digit of input) {
        const num = parseInt(digit);
        if (isNaN(num)) {
            output = 'Invalid input. Please enter only numbers.';
            break;
        }
        output += numberToStringMap[num];
    }

    result.textContent = output;
});

resetBtn.addEventListener('click', () => {
    numberInput.value = '';
    result.textContent = '';
});
