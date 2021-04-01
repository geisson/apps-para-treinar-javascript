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

containerBoxBorderRadius.addEventListener('input', () => {
  boxBorderRadius.style.borderTopLeftRadius = `${inputTopLeftRx.value}px ${inputTopLeftRy.value}px `;
  boxBorderRadius.style.borderTopRightRadius = `${inputTopRightRx.value}px ${inputTopRightRy.value}px `;
  boxBorderRadius.style.borderBottomLeftRadius = `${inputBottomLeftRx.value}px ${inputBottomLeftRy.value}px `;
  boxBorderRadius.style.borderBottomRightRadius = `${inputBottomRightRx.value}px ${inputBottomRightRy.value}px `;
});
