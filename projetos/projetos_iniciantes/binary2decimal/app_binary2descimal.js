const inputBinaryNumber = document.querySelector('#binary-number');
const inputDecimalNumber = document.querySelector('#decimal-number');
const invalidNumber = document.querySelector(
  '[data-js=display-invalid-number]',
);

inputBinaryNumber.addEventListener('input', (event) => {
  const valueInputBinaryNumber = event.target.value;
  const lastDigitEntered = +valueInputBinaryNumber.substr(-1, 1);
  const valueDecimalNumber = parseInt(valueInputBinaryNumber, 2);

  const regex = /([2-9])/;
  const invalidNumberBinary = regex.test(valueInputBinaryNumber);

  console.log(invalidNumberBinary);

  if (invalidNumberBinary) {
    inputBinaryNumber.classList.add('is-invalid');
    invalidNumber.innerHTML = lastDigitEntered;
    inputDecimalNumber.value = '';
    return;
  }

  inputBinaryNumber.classList.remove('is-invalid');
  inputDecimalNumber.value = valueDecimalNumber;
});
