import { BASE_URL } from './configs/configs.js';
import { fetchData } from './libs/fetchData.js';

fetchData(`${BASE_URL}/hero-image`);

const heroImg = document.querySelector('.hero__image');

export function setHeroImage(image) {
  let hero = image.shoes.url;
  console.log(hero);
  heroImg.innerHTML = `<img class="img-fluid" src="${BASE_URL + hero}">`;
}
