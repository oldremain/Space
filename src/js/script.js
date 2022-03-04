const $subtitle = document.querySelector('.header__subtitle p');
const text = $subtitle.textContent;

let counter = 0;

let timer = setTimeout(function showText() {
  if (counter == text.length) {
    clearTimeout(timer);
  }
  $subtitle.textContent = text.slice(0, counter);
  counter++;
  setTimeout(showText, 80);
}, 0);

// console.log(left);
