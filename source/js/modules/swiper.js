export const initSwiper = function () {
  const promoImage = new window.Swiper('.promo__swiper-image', {
    slidesPerView: 1,
    // loop: true,

    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
    },
  });
  // eslint-disable-next-line
  const promoContent = new window.Swiper('.promo__swiper-content', {
    slidesPerView: 1,
    // loop: true,
    effect: 'fade',
    autoHeight: true,

    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: '.promo__pagination',
      clickable: true,
      bulletActiveClass: 'is-active',
      bulletClass: 'promo__pagination-bullet',
      renderBullet(index, className) {
        return '<button class="' + className + '" type="button" aria-label="Слайд ' + (index + 1) + '"></button>';
      },
    },

    breakpoints: {
      1200: {
        allowTouchMove: false,
      },
    },
  });

  promoImage.controller.control = promoContent;
  promoContent.controller.control = promoImage;

};
