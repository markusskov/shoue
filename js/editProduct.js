import alert from './components/alert.js';
import { BASE_URL, header } from './configs/configs.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
console.log(id);

const form = document.querySelector('.form');
let name = document.querySelector('#name');
let price = document.querySelector('#price');
let subtext = document.querySelector('#subtext');
let description = document.querySelector('#description');
let featured = document.querySelector('#featured');
let inStock = document.querySelector('#inStock');

async function getFormInfo() {
  const { data } = await axios.get(`${BASE_URL}/products/${id}`);
  console.log(data);
  name.value = data.title;
  price.value = data.price;
  subtext.value = data.subtitle;
  description.value = data.product_features;
}
getFormInfo();
