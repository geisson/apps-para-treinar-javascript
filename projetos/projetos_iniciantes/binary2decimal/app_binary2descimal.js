const inputBinaryNumber = document.querySelector('#binary-number');
const inputDecimalNumber = document.querySelector('#decimal-number');
const invalidFeedback = document.querySelector('[data-js=invalid-feedback]');
const invalidNumber = document.querySelector(
  '[data-js=display-invalid-number]',
);

inputBinaryNumber.addEventListener('input', (event) => {
  const valueInputBinaryNumber = event.target.value;
  const lastDigitEntered = +valueInputBinaryNumber.substr(-1, 1);
  const valueDecimalNumber = parseInt(valueInputBinaryNumber, 2);

  if (lastDigitEntered !== 0 && lastDigitEntered !== 1) {
    inputBinaryNumber.classList.add('is-invalid');
    invalidNumber.innerHTML = lastDigitEntered;
    return;
  }

  inputBinaryNumber.classList.remove('is-invalid');
  inputDecimalNumber.value = valueDecimalNumber;
});
