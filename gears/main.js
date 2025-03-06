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
    })
  }
});


function fire(versionNumber) {
  document.getElementById('ver').innerText = versionNumber;
  document.querySelector('body').classList.remove('loading');
  addStar(versionNumber);
}


let curentStar = 0;
function addStar(amountOfStars) {
  setTimeout(() => {
    if (curentStar < amountOfStars) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;

      const star = document.createElement('div');

      const starWrapper = document.getElementById('stars');
      starWrapper.appendChild(star);

      star.classList.add('star');
      star.style.top = `${top}%`;
      star.style.left = `${left}%`;

      addStar(amountOfStars);
      curentStar++;
    }
  }, 500 * Math.random());
}