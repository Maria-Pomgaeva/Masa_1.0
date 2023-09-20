export const initNews = function () {
  const filterNews = document.querySelector('[data-slider="news"]');
  if (!filterNews) {
    return;
  }

  const buttonsNews = document.querySelectorAll('.news__btn');
  const newsCard = document.querySelectorAll('.news__slide');
  const newsControls = document.querySelector('.news__btn-contaner');
  const newsFirst = document.querySelector('.news__slide:first-child');

  let currentCategory;

  function filter(category, items) {
    items.forEach((item) => {
      const cardDataset = item.dataset.filter;

      const isItemFiltered = cardDataset === category;
      const isShowAll = category.toLowerCase() === 'all';

      if (!isItemFiltered && !isShowAll) {
        item.classList.add('is-hide');
      } else {
        item.classList.remove('is-hide');
      }
      newsSwiper.update();
    });
  }

  buttonsNews.forEach((button) => {
    button.addEventListener('click', () => {

      buttonsNews.forEach((it) => {
        it.classList.remove('is-active');
      });

      currentCategory = button.dataset.filter;

      if (!(currentCategory === 'all')) {
        newsFirst.classList.remove('news__slide--big');
      } else {
        newsFirst.classList.add('news__slide--big');
      }
      filter(currentCategory, newsCard);
      button.classList.add('is-active');

      let scrollLeftTab;
      const railsWidth = newsControls.clientWidth;
      const railsWidthLeft = newsControls.getBoundingClientRect().left;
      const tabWidth = button.offsetWidth;

      const tabLeftOffset = button.getBoundingClientRect().left;
      scrollLeftTab = Number(tabLeftOffset - (railsWidth / 2) + (tabWidth / 2) - railsWidthLeft);

      newsControls.scrollBy({
        left: scrollLeftTab,
        behavior: 'smooth',
      });
    });
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
      nextEl: '.news__navigation-btn--next',
      prevEl: '.news__navigation-btn--prev',
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
