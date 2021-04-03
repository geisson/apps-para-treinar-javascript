const inputTopLeftRx = document.querySelector('#top-left-rx');
const inputTopLeftRy = document.querySelector('#top-left-ry');
const inputTopRightRx = document.querySelector('#top-right-rx');
const inputTopRightRy = document.querySelector('#top-right-ry');
const inputBottomLeftRx = document.querySelector('#bottom-left-rx');
const inputBottomLeftRy = document.querySelector('#bottom-left-ry');
const inputBottomRightRx = document.querySelector('#bottom-right-rx');
const inputBottomRightRy = document.querySelector('#bottom-right-ry');
const boxBorderRadius = document.querySelector('[data-js=box-border-radius]');
const containerBoxBorderRadius = document.querySelector(
  '[data-js=container-box-border-radius]',
);
const copyButton = document.querySelector('[data-js=copy-button]');
const inputCode = document.querySelector('#input-code');

containerBoxBorderRadius.addEventListener('input', () => {
  const borderRadiusInOrder = `${inputTopLeftRx.value}px ${inputTopRightRx.value}px ${inputBottomRightRx.value}px ${inputBottomLeftRx.value}px / ${inputTopLeftRy.value}px ${inputTopRightRy.value}px ${inputBottomRightRy.value}px ${inputBottomLeftRy.value}px`;

  boxBorderRadius.style.borderRadius = borderRadiusInOrder;

  inputCode.value = `border-radius: ${borderRadiusInOrder};`;
});

copyButton.addEventListener('click', async () => {
  if (!navigator.clipboard) return;

  try {
    const codeBorderRadius = inputCode.value;

    if (!codeBorderRadius) {
      return;
    }

    inputCode.classList.add('is-valid');

    await navigator.clipboard.writeText(codeBorderRadius);
  } catch (error) {
    inputCode.classList.add('is-invalid');
  }
});

inputCode.addEventListener('change', () => {
  console.log(`valor: ${inputCode.value}`);
  inputCode.classList.remove('is-valid');
});
