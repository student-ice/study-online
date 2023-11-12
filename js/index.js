const banner = document.querySelector('.banner');
let index = 0;
const imgs = ['imgs/banner1.png', 'imgs/banner2.png', 'imgs/banner3.png'];

function changeImg() {
  index++;
  if (index >= imgs.length) index = 0;
  banner.style.backgroundImage = `url(${imgs[index]})`;
}

setInterval(changeImg, 3000);
