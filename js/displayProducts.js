export function displayProducts(data) {
  const products = document.querySelector('.displayProducts');
  products.innerHTML = '';
  data.forEach((product) => {
    let isProductInStock = '';
    if (product.inStock) {
      isProductInStock = 'In Stock';
    } else {
      isProductInStock = 'Sold out';
    }
    products.innerHTML += `<a href="/singleProduct.html?id=${product.id}">
    <div class="card">
      <img class="card-img-top" src="${product.img.url}" alt="${product.title}">
      <div class="card-body">
        <p class="card-text">${product.title}</p>
        <p class="card-text">${product.price}$ | ${isProductInStock}</p>
      </div>
    </div>
    </a>`;
  });
}
