import { BASE_URL } from './configs/configs.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
console.log(id);

const productImage = document.querySelector('.singpleProduct__image');
const title = document.querySelector('.singleProduct__title');
const subtitle = document.querySelector('.singleProduct__subtitle');
const price = document.querySelector('.singleProduct__price');

async function displaySingleProduct() {
  const { data } = await axios.get(`${BASE_URL}/products/${id}`);
  console.log(data);
  productImage.innerHTML = `<img class="img-fluid img__background" src="${data.img.url}">`;
  title.innerHTML = `${data.title}`;
  subtitle.innerHTML = `${data.subtitle}`;
  price.innerHTML = `Price: $${data.price}`;
}
displaySingleProduct();
