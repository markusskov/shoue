import alert from './components/alert.js';
import { BASE_URL } from './configs/configs.js';

async function displayFeaturedProducts() {
  try {
    const res = await axios.get(`${BASE_URL}/products`);
    const products = res.data;
    console.log(products);
    const productDOM = document.querySelector('.cards');
    products.forEach((product) => {
      let isProductInStock = 'In Stock';
      if (!product.inStock) {
        isProductInStock = 'Not In Stock';
      }

      if (product.featured) {
        productDOM.innerHTML += `
        <a href="/singleProduct.html?id=${product.id}">
        <div class="card">
          <img class="card-img-top" src="${product.url}" alt="${product.title}">
          <div class="card-body">
            <p class="card-text">${product.title}</p>
            <p class="card-text">${product.price}$ | ${isProductInStock}</p>
          </div>
        </div>
        </a>`;
      }
    });
  } catch (err) {
    alert('alert-danger', 'Error requesting products.');
    console.log(err);
  }
}
displayFeaturedProducts();
