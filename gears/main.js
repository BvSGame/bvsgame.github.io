import { readTextFile } from "../src/js/modules/js_xhr_ajax/xhr_ajax.js";


readTextFile({url: 'https://bvsgame.github.io/data/version'}, fileContent => {
  const num = parseInt(fileContent.match(/\d+$/)[0]);
  document.getElementById('ver').innerText = num;
  let i = 0;
  function addStar() {
    setTimeout(() => {
      if (i < num) {
        const top = Math.random() * 100;
        const left = Math.random() * 100;

        const star = document.createElement('div');

        const starWrapper = document.getElementById('stars');
        starWrapper.appendChild(star);

        star.classList.add('star');
        star.style.top = `${top}%`;
        star.style.left = `${left}%`;

        addStar();
        i++;
      }
    }, 500 * Math.random());
  }
  addStar();
});