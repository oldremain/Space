const $subtitle = document.querySelector('.header__subtitle p');
const text = $subtitle.textContent;

const $burger = document.querySelector('.header__burger');
const $menu = document.querySelector('.header-menu');

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

$burger.addEventListener('click', (e) => {
  showMenu(e);
});

function showMenu(e) {
  let burger = e.target.closest('.header__burger');

  if (burger.classList.contains('active')) {
    $menu.style.left = `-100%`;
    burger.classList.remove('active');
    console.log('yes');
  } else if (burger) {
    $menu.style.left = 0;
    burger.classList.add('active');
    console.log('yes');
  }
}
