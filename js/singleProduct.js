import { BASE_URL } from './configs/configs.js';
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from './libs/localStorage.js';

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');
console.log(id);

const productImage = document.querySelector('.singleProduct__image');
const title = document.querySelector('.singleProduct__title');
const subtitle = document.querySelector('.singleProduct__subtitle');
const price = document.querySelector('.singleProduct__price');
const aboutTitle = document.querySelector('.description__title');
const aboutInfo = document.querySelector('.description__info');
const featuresInfo = document.querySelector('.features__info');
const addToCartBtn = document.querySelector('.addToCartBtn');

async function displaySingleProduct() {
  const { data } = await axios.get(`${BASE_URL}/products/${id}`);
  console.log(data);
  productImage.innerHTML = `<img class="img-fluid img__background" src="${data.img.url}">`;
  title.innerHTML = `${data.title}`;
  subtitle.innerHTML = `${data.subtitle}`;
  price.innerHTML = `Price: <b>$${data.price}</b>`;
  aboutTitle.innerHTML = `About the ${data.title}`;
  aboutInfo.innerHTML = `${data.about}`;
  featuresInfo.innerHTML = `${data.product_features}`;
  // Add data attributes to button for saving to local storage
  addToCartBtn.dataset.id = `${data.id}`;
  addToCartBtn.dataset.title = `${data.title}`;
  addToCartBtn.dataset.url = `${data.img.url}`;
  addToCartBtn.dataset.price = `${data.price}`;
}
function addToCart() {
  addToCartBtn.onclick = () => {
    let product = {
      id: addToCartBtn.dataset.id,
      title: addToCartBtn.dataset.title,
      url: addToCartBtn.dataset.url,
      price: addToCartBtn.dataset.price,
    };
    let savedProducts = getFromLocalStorage('savedProducts');
    let findProduct = savedProducts.find((singleProduct) => {
      return singleProduct.id === addToCartBtn.dataset.id;
    });
    if (findProduct === undefined) {
      savedProducts.push(product);
      saveToLocalStorage('savedProducts', savedProducts);
    } else {
      let removeSavedProduct = savedProducts.filter((singleProduct) => {
        return singleProduct.id !== addToCartBtn.dataset.id;
      });
      saveToLocalStorage('savedProducts', removeSavedProduct);
    }
  };
}
addToCart();
displaySingleProduct();
