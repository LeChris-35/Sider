let nextDom = document.getElementById('next');
let previousDom = document.getElementById('previous');
let carouselDom = document.querySelector('.carousel');
let listItemDom =  document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail');

nextDom.addEventListener('click', () => {
  showSlider('next');
});

previousDom.addEventListener('click', () =>{
  showSlider('previous');
});

let timeRunning = 3000;
let timeAutoNext = 30000;

let runTimeout;

let runAutoRun = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carousel .list .item');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

  if (type === 'next') {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add('next');
  } else {
    let lastPosition = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[lastPosition]);
    thumbnailDom.prepend(itemThumbnail[lastPosition]);
    carouselDom.classList.add('previous');
  }

  clearTimeout(runTimeout);
  runTimeout = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('previous');
  }, timeRunning);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);
}
