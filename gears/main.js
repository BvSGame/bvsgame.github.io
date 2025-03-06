import { readTextFile } from "../src/js/modules/js_xhr_ajax/xhr_ajax.js";


readTextFile({url: 'https://bvsgame.github.io/data/version'}, fileContent => {
  function startApp() {
    const num = parseInt(fileContent.match(/\d+$/)[0]);
    fire(num);
  }

  if (document.readyState === 'complete')
    startApp();
  else {
    document.addEventListener('readystatechange', () => {
      if (document.readyState === 'complete')
        startApp();
    });
  }
});


function fire(versionNumber) {
  document.getElementById('ver').innerText = versionNumber;
  document.querySelector('body').classList.remove('loading');
  addStar(versionNumber);
  rearrangeStars();
}


let curentStar = 0;
function addStar(amountOfStars) {
  setTimeout(() => {
    if (curentStar < amountOfStars) {
      const top  = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * .2;
      const blinkRate = 1.5 + Math.random() * 3.5;

      const star = document.createElement('div');

      const starWrapper = document.getElementById('stars');
      starWrapper.appendChild(star);

      star.classList.add('star');
      star.style.top  = `${top}%`;
      star.style.left = `${left}%`;
      star.style.height = `${size}em`;
      star.style.width = `${size}em`;
      star.style.animation = `star ${blinkRate}s infinite, star_appears 5s 1`;

      addStar(amountOfStars);
      curentStar++;
    }
  }, 500 * Math.random());
}


function rearrangeStars() {
  setInterval(() => {
    const allStars = document.querySelectorAll('.star');
    const wrapper = document.querySelector('.stars_wrapper');

    allStars.forEach(star => {
      const top  = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * .2;
      const blinkRate = 1.5 + Math.random() * 3.5;

      wrapper.classList.add('fading');

      setTimeout(() => {
        wrapper.classList.remove('fading');
        star.style.top  = `${top}%`;
        star.style.left = `${left}%`;
        star.style.height = `${size}em`;
        star.style.width = `${size}em`;
        star.style.animation = `star ${blinkRate}s infinite, star_appears 5s 1`;
      }, 1900);
    });
  }, 13800);
}