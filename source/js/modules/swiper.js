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

    navigation: {
      nextEl: '.program__navigation-btn--next',
      prevEl: '.program__navigation-btn--prev',
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
  });
  // eslint-disable-next-line
  const newsSwiper = new window.Swiper('.news__swiper', {
    pagination: {
      el: '.news__pagination',
      clickable: true,
      bulletActiveClass: 'is-active',
      bulletClass: 'news__pagination-btn scrollbar__pagination-btn',
      renderBullet(index, className) {
        return '<button class="' + className + '" type="button">' + (index + 1) + '</button>';
      },
    },
    spaceBetween: 20,
    slidesPerView: 1,
    allowTouchMove: true,
    grid: {
      rows: 2,
      fill: 'row',
    },

    navigation: {
      nextEl: '.news__btn--next',
      prevEl: '.news__btn--prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 30,
        allowTouchMove: true,
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },

      1200: {
        spaceBetween: 32,
        allowTouchMove: false,
        slidesPerView: 'auto',
        grid: {
          rows: 1,
        },
      },
    },
  });
};
