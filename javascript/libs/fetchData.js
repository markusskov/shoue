import { setHeroImage } from '../main.js';

export async function fetchData(url) {
  try {
    const res = await axios.get(url);
    const data = res.data;
    console.log(data);
    setHeroImage(data);
  } catch (err) {
    console.log(err);
  }
}
