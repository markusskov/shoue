import { getFromLocalStorage } from './libs/localStorage.js';

const shoppingCart = getFromLocalStorage('savedProducts');
console.log(shoppingCart);
const listOfProducts = document.querySelector('.list-group');

function displayProductsInShoppingCart() {
  shoppingCart.forEach((product) => {
    listOfProducts.innerHTML += `<a
        href="/singleProduct.html?id=${product.id}"
        class="
          list-group-item list-group-item-action
          flex-column
          align-items-start
        "
      >
        <div class="d-flex w-100 justify-content-between align-items-center">
          <h5 class="mb-1">${product.title}</h5>
          <img src="${product.url}" width="10%"</img>
        </div>
        <p class="mb-1">
          $${product.price}
        </p>
        <small>Return to product.</small>
      </a>
      `;
  });
}
displayProductsInShoppingCart();
