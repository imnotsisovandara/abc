const palindromeInput = document.getElementById('palindromeInput');
const palindromeResult = document.getElementById('palindromeResult');
const checkBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('resetBtn');

checkBtn.addEventListener('click', () => {
    const input = palindromeInput.value;
    if (isNaN(input) || input === '') {
        palindromeResult.textContent = 'Invalid input. Please enter a valid number.';
        return;
    }

    const reversedInput = input.split('').reverse().join('');
    if (input === reversedInput) {
        palindromeResult.textContent = `${input} => Number is a palindrome number.`;
    } else {
        palindromeResult.textContent = `${input} => Number is not a palindrome number.`;
    }
});

resetBtn.addEventListener('click', () => {
    palindromeInput.value = '';
    palindromeResult.textContent = '';
});
