const mapContainer = document.querySelector('.map');

export const initMap = function () {
  if (!mapContainer) {
    return;
  }

  const mapBlock = mapContainer ? mapContainer.querySelector('[data-map]') : null;
  const lMap = window.L;

  let map = lMap.map(mapBlock, {
    center: [55.028522, 82.928281],
    zoom: 15,
    scrollWheelZoom: false,
  });

  lMap.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  let myIcon = lMap.icon({
    className: 'map__pin',
    iconUrl: './img/svg/map-pin.svg',
    iconSize: [70, 70],
    popupAnchor: [0, -20],
  });

  lMap.marker([55.028522, 82.928281], {
    icon: myIcon,
  }).addTo(map).bindPopup('г. Новосибирск, ул. Щетинкина 68, культурный центр «Бейт Менахем»');
};
