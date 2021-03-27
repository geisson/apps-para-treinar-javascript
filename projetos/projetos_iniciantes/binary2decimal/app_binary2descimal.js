const inputBinaryNumber = document.querySelector('#binary-number');
const inputDecimalNumber = document.querySelector('#decimal-number');
const invalidNumber = document.querySelector(
  '[data-js=display-invalid-number]',
);

const getLastCharacterTyped = (value) => +value.substr(-1, 1);

const convertToDecimalNumber = (value) => parseInt(value, 2);

const validateValueEntry = (value, regex) => regex.test(value);

const processBinaryToDecimal = (event) => {
  const valueInputBinaryNumber = event.target.value;
  const lastDigitEntered = getLastCharacterTyped(valueInputBinaryNumber);
  const valueDecimalNumber = convertToDecimalNumber(valueInputBinaryNumber);

  const regex = /([2-9])/;
  const isAnInvalidBinaryNumber = validateValueEntry(
    valueInputBinaryNumber,
    regex,
  );

  if (isAnInvalidBinaryNumber) {
    inputBinaryNumber.classList.add('is-invalid');
    invalidNumber.innerHTML = lastDigitEntered;
    inputDecimalNumber.value = 0;
    return;
  }

  inputBinaryNumber.classList.remove('is-invalid');
  inputDecimalNumber.value = valueDecimalNumber || 0;
};

inputBinaryNumber.addEventListener('input', processBinaryToDecimal);
