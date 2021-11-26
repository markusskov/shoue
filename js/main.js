import { fetchProducts } from './libs/fetchProducts.js';
import { BASE_URL } from './configs/configs.js';

fetchProducts(`${BASE_URL}/products`);
