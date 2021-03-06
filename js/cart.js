import { getFromLocalStorage } from './libs/localStorage.js';

let shoppingCart = getFromLocalStorage('savedProducts');
const listOfProducts = document.querySelector('.list-group');
const total = document.querySelector('.total');
let deleteBtn = document.querySelector('.deleteItems');

const sumall = shoppingCart
  .map((item) => parseFloat(item.price))
  .reduce((prev, curr) => prev + curr, 0);

total.innerHTML = `Total price: <b>$${sumall}</b>`;

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

if (listOfProducts.innerHTML === '') {
  listOfProducts.innerHTML = '<b>Your cart is empty.</b>';
  deleteBtn.innerHTML = '';
  total.innerHTML = '';
}

function deleteItemsFromCart() {
  deleteBtn.onclick = function () {
    localStorage.removeItem('savedProducts');
    listOfProducts.innerHTML = '<b>Your cart is empty.</b>';
    shoppingCart = [];
    deleteBtn.innerHTML = '';
    total.innerHTML = '';
  };
}
deleteItemsFromCart();
