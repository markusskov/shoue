export function displayProducts(data) {
  const products = document.querySelector('.displayProducts');
  products.innerHTML = '';
  data.forEach((product) => {
    let isProductInStock = 'In Stock';
    if (!product.inStock) {
      isProductInStock = 'Not In Stock';
    }

    products.innerHTML += `<a href="/singleProduct.html?id=${product.id}">
    <div class="card">
      <img class="card-img-top" src="${product.url}" alt="${product.title}">
      <div class="card-body">
        <p class="card-text">${product.title}</p>
        <p class="card-text">${product.price}$ | ${isProductInStock}</p>
      </div>
    </div>
    </a>`;
  });
}
