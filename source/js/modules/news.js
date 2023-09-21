export const initFilterNews = () => {
  const filterBtn = document.querySelectorAll('.news__btn');
  const containerBtn = document.querySelector('.news__btn-contaner');

  filterBtn.forEach((button) => {
    button.addEventListener('click', () => {

      filterBtn.forEach((it) => {
        it.classList.remove('is-active');
      });

      button.classList.add('is-active');

      let scrollLeftTab;
      const railsWidth = containerBtn.clientWidth;
      const railsWidthLeft = containerBtn.getBoundingClientRect().left;
      const tabWidth = button.offsetWidth;

      const tabLeftOffset = button.getBoundingClientRect().left;
      scrollLeftTab = Number(tabLeftOffset - (railsWidth / 2) + (tabWidth / 2) - railsWidthLeft);

      containerBtn.scrollBy({
        left: scrollLeftTab,
        behavior: 'smooth',
      });
    });
  });
};
