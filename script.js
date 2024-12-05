let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let navItems = nav.querySelectorAll('.nav__link');
let header = document.querySelector('.header');
let overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
  document.body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger--active');
  overlay.classList.toggle('overlay--visible');

  let expanded = burger.getAttribute('aria-expanded') === 'true' || false;
  burger.setAttribute('aria-expanded', !expanded);

  if (nav.classList.contains('nav--visible')) {
    nav.classList.remove('nav--visible');
    setTimeout(() => {
      nav.classList.remove('nav--initial');
    }, 600);
  } else {
    nav.classList.add('nav--initial');
    nav.classList.add('nav--visible');
  }
});

overlay.addEventListener('click', () => {
  document.body.classList.remove('stop-scroll');
  burger.classList.remove('burger--active');
  nav.classList.remove('nav--visible');
  overlay.classList.remove('overlay--visible');
  burger.setAttribute('aria-expanded', 'false');
});

navItems.forEach((el) => {
  el.addEventListener('click', () => {
    document.body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--visible');
    overlay.classList.remove('overlay--visible');

    burger.setAttribute('aria-expanded', false);
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1024) {
    nav.style.transition = 'none';
    nav.classList.remove('nav--visible');
    nav.classList.remove('nav--initial');
    overlay.classList.remove('overlay--visible');
    burger.classList.remove('burger--active');
    document.body.classList.remove('stop-scroll');
    burger.setAttribute('aria-expanded', 'false');
    setTimeout(() => {
      nav.style.transition = '';
    }, 0);
  }
});
