import alert from './components/alert.js';
import { BASE_URL, header } from './configs/configs.js';

const form = document.querySelector('.form');

form.onsubmit = async function (event) {
  event.preventDefault();
  let name = document.querySelector('#name');
  let price = document.querySelector('#price');
  let subtext = document.querySelector('#subtext');
  let description = document.querySelector('#description');
  let about = document.querySelector('#about');
  let url = document.querySelector('#url');
  let featuredRadio = document.querySelector('#featured');
  let inStockRadio = document.querySelector('#inStock');

  try {
    let newProduct = {
      title: name.value,
      price: price.value,
      subtitle: subtext.value,
      product_features: description.value,
      about: about.value,
      url: url.value,
      inStock: inStockRadio.checked,
      featured: featuredRadio.checked,
    };

    let response = await axios.post(`${BASE_URL}/products`, newProduct, header);
    alert('alert-success', 'Product posted.');
    name.value = '';
    price.value = '';
    subtext.value = '';
    description.value = '';
    about.value = '';
    url.value = '';
    inStockRadio.checked = '';
    featuredRadio.checked = '';
    console.log(response);
  } catch (error) {
    alert('alert-danger', 'There was a problem creating new Product.');
    console.log(error);
  }
};
