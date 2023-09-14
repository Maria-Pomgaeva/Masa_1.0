import {Burger} from './burger';

const header = document.querySelector('[data-header]');
const overlay = document.querySelector('[data-overlay]');
const burger = new Burger();

const onOverlayClose = (evt) => {
  evt.preventDefault();

  let target = evt.target;
  if (target === overlay) {
    burger._closeMenu();
  }
};

export const menuOpen = function () {
  if (!header) {
    return;
  }

  burger.init();

  overlay.addEventListener('click', onOverlayClose);
};
