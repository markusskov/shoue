import { BASE_URL } from './configs/configs.js';

export async function displayFeaturedProducts() {
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
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${product.img.url}" alt="${product.title}">
          <div class="card-body">
            <p class="card-text">${product.title}</p>
            <p class="card-text">${product.price} $ | ${isProductInStock}</p>
          </div>
        </div>`;
      }
    });
  } catch (err) {
    console.log(err);
  }
}
