const inputBinaryNumber = document.querySelector('#binary-number');
const inputDecimalNumber = document.querySelector('#decimal-number');
const invalidFeedback = document.querySelector('[data-js=invalid-feedback]');

inputBinaryNumber.addEventListener('input', (event) => {
  const valueInputBinaryNumber = event.target.value;
  const lastDigitEntered = valueInputBinaryNumber.substr(-1, 1);
  const valueDecimalNumber = parseInt(valueInputBinaryNumber, 2);

  console.log(typeof lastDigitEntered);
  console.log(lastDigitEntered);

  inputDecimalNumber.value = valueDecimalNumber;
});
