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

  // eslint-disable-next-line
  const programSwiper = new window.Swiper('.program__swiper', {
    spaceBetween: 15,
    slidesPerView: 1,

    navigation: {
      nextEl: '.program__btn--next',
      prevEl: '.program__btn--prev',
    },

    scrollbar: {
      el: '.program__scrollbar',
      draggable: true,
    },

    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: 'auto',
        allowTouchMove: true,
      },
      1200: {
        slidesOffsetBefore: 0,
        spaceBetween: 32,
        slidesPerView: 3,
        allowTouchMove: false,
      },
    },
  })
};
