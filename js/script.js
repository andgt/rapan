'use strict'

// Меню

let mainNav = document.querySelector('.main-nav');
let buttonToggle = document.querySelector('.main-nav__button-toggle');
let headerMenu = document.querySelector(".header");

mainNav.classList.remove('main-nav--no-js');

buttonToggle.addEventListener('click', function() {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    headerMenu.classList.add("header__fixed");
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    headerMenu.classList.remove("header__fixed");
  }
});

// Фиксированное меню

let menuFixed = function() {
  if (window.pageYOffset > 10) {
    headerMenu.classList.add("header__fixed");
  } else {
    headerMenu.classList.remove("header__fixed");
  }
};

// Кнопка наверх

let scrollUpButton = function () {
  let scrollUp = document.querySelector(".button__scroll-up");

  if (window.pageYOffset > 100) {
    scrollUp.classList.add("button__scroll-up--showed");
  } else {
    scrollUp.classList.remove("button__scroll-up--showed");
  }

  scrollUp.onclick = function (evt) {
    window.scrollTo(0, 0);
  };
};

window.onscroll = function() {
  menuFixed();
  scrollUpButton();
};
