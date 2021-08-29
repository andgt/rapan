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

// Табы меню

  let tabMenu = function() {
    let tabBtn = document.querySelectorAll(".tabs__button");
    let cardsBlock = document.querySelectorAll(".catalog__container");
    let tabName;

    tabBtn.forEach(element => {
      element.addEventListener("click", selectTab);
    });

    function selectTab(evt) {
      tabBtn.forEach(element => {
        element.classList.remove("tabs__button--active");
      });
      this.classList.add("tabs__button--active");
      tabName = this.getAttribute("data-tab");
      selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
      cardsBlock.forEach(element => {
        if (element.classList.contains(tabName)) {
          element.classList.add("catalog__container--active");
        } else {
          element.classList.remove("catalog__container--active");
        }
      });
    }
  };

tabMenu();

// Модальные окна

let modal = function () {
  let htmlPage = document.querySelector(".page");
  let modalsOpen = document.querySelectorAll(".js-button-open");
  let modalWindows = document.querySelectorAll(".modal");
  let modalOverlay = document.querySelector(".modal__overlay");
  let modalFormBack = document.querySelector(".modal__form--backcall");
  let buttonsClose = document.querySelectorAll(".js-button-close");
  let modalUsernames = document.querySelectorAll(".modal__form-input--username");
  let modalBackCall = document.querySelector(".modal");
  let inputPhone = document.querySelector(".modal__form-input--phone");
  let username = document.querySelector(".modal__form-input--username");
  let modalButtons = document.querySelectorAll(".modal__button");

  let modalOpenName;
  let scrollPosition;
  let modalName;

  // Автофокус

  let autofocus = function () {
    for (let modalUsername of modalUsernames) {
      modalUsername.focus();
    }
  };

  // Открытие окна

  for (let modalOpen of modalsOpen) {
    modalOpen.onclick = function (evt) {
      evt.preventDefault();
      scrollPosition = pageYOffset;
      modalOpenName = this.getAttribute("data-modal-window");
      modalName = this.getAttribute("data-modal-name");
      for (let modalWindow of modalWindows) {
        if (modalWindow.classList.contains(modalOpenName)) {
          htmlPage.classList.add("page__modal-opened");
          htmlPage.style.top = -scrollPosition + "px";
          modalOverlay.classList.add("modal-overlay__open");
          modalWindow.classList.add("modal__show");
          autofocus();
        }
      }
    }
  };

  // Закрытие окна

  let closesWindows = function () {
    for (let modalWindow of modalWindows) {
      htmlPage.classList.remove("page__modal-opened");
      modalWindow.classList.remove("modal__show");
      modalWindow.classList.remove("modal-error");
      modalOverlay.classList.remove("modal-overlay__open");
      htmlPage.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollPosition);
      htmlPage.style.scrollBehavior = "";
      htmlPage.style.top = "";
    }
  };

  // Закрытие окна по кнопке

  for (let buttonClose of buttonsClose) {
    buttonClose.onclick = function (evt) {
      evt.preventDefault();
      closesWindows();
    }
  };

  // Закрытие окна по esc

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      closesWindows();
    }
  });

  // Закрытие по клику вне окна

  htmlPage.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("modal__overlay")) {
      closesWindows();
    }
  });
};

modal();
