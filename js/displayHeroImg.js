import { BASE_URL } from './configs/configs.js';

export async function getHeroImage() {
  try {
    const res = await axios.get(`${BASE_URL}/hero-image`);
    const data = res.data;
    const heroImg = document.querySelector('.hero__image');
    let hero = data.shoes.formats.medium.url;
    heroImg.innerHTML = `<img class="img-fluid" src="${hero}">`;
  } catch (err) {
    console.log(err);
  }
}
