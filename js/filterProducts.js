import { displayProducts } from './displayProducts.js';

export function filteredProducts(data) {
  const search = document.querySelector('.products__search');
  search.onkeyup = function () {
    let results = data.filter((product) => {
      return product.title.toLowerCase().includes(this.value.toLowerCase());
    });
    displayProducts(results);
  };
}
