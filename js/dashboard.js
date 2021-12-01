import { BASE_URL, header } from './configs/configs.js';

async function overviewOverProducts() {
  const { data } = await axios.get(`${BASE_URL}/products`);
  console.log(data);
  let productList = document.querySelector('.tableBody');
  productList.innerHTML = '';

  data.forEach((product, iteration) => {
    let isItFeatured = 'YES';
    if (!product.featured) {
      isItFeatured = 'NO';
    }

    productList.innerHTML += `
    <tr>
      <th scope="row">${iteration + 1}</th>
      <td>${product.title}</td>
      <td>${isItFeatured}</td>
    <td>
      <a href="editProduct.html?id=${
        product.id
      }"><i class="fas fa-edit"></i></a>
  </td>
  <td>
      <i class="fas fa-trash-alt" data-id=${product.id}></i>
  </td>
</tr>`;
  });

  let deleteProducts = document.querySelectorAll('.fa-trash-alt');
  deleteProducts.forEach(function (deleted) {
    deleted.onclick = async function () {
      let response = await axios.delete(
        `${BASE_URL}/products/${deleted.dataset.id}`,
        header
      );
      console.log(response);
      overviewOverProducts();
    };
  });
}
overviewOverProducts();
