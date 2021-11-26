import { BASE_URL } from './configs/configs.js';

async function displayFeaturedProducts() {
  try {
    const res = await axios.get(`${BASE_URL}/products`);
    const products = res.data;
    console.log(products);
    const productDOM = document.querySelector('.cards');
    products.forEach((product) => {
      let isProductInStock = '';
      if (product.inStock) {
        isProductInStock = 'In Stock';
      } else {
        isProductInStock = 'Sold out';
      }

      if (product.featured) {
        productDOM.innerHTML += `
        <a href="/singleProduct.html?id=${product.id}">
        <div class="card">
          <img class="card-img-top" src="${product.img.url}" alt="${product.title}">
          <div class="card-body">
            <p class="card-text">${product.title}</p>
            <p class="card-text">${product.price}$ | ${isProductInStock}</p>
          </div>
        </div>
        </a>`;
      }
    });
  } catch (err) {
    console.log(err);
  }
}
displayFeaturedProducts();
