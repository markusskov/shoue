import { displayFeaturedProducts } from '../displayFeaturedProducts.js';

export async function fetchProducts(url) {
  try {
    const res = await axios.get(url);
    const data = res.data;
    console.log(data);
    displayFeaturedProducts(data);
  } catch (err) {
    console.log(err);
  }
}
