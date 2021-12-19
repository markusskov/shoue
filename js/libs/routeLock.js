import { GetUser } from './localStorage.js';

if (GetUser('jwt') === null) {
  console.log('No token detected.');
  window.location.href = './login.html';
}
