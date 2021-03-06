import alert from '../components/alert.js';
import { displayProducts } from '../displayProducts.js';
import { filteredProducts } from '../filterProducts.js';

export async function fetchProducts(url) {
  try {
    const res = await axios.get(url);
    const data = res.data;
    console.log(data);
    displayProducts(data);
    filteredProducts(data);
  } catch (err) {
    alert('alert-danger', 'Error requesting products.');
    console.log(err);
  }
}
