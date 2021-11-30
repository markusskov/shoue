import { saveToLocalStorage } from './libs/localStorage.js';
import {
  testLengthofTextBoxValue,
  testEmailAddress,
} from './libs/validation.js';
import alert from './components/alert.js';
import { BASE_URL } from './configs/configs.js';

let form = document.querySelector('.form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

form.onsubmit = async function (event) {
  event.preventDefault();

  if (
    testLengthofTextBoxValue(password.value, 1) &&
    testEmailAddress(email.value)
  ) {
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/local`, {
        identifier: email.value,
        password: password.value,
      });
      console.log(data);
      saveToLocalStorage('jwt', data.jwt);
      saveToLocalStorage('user', data.user);
      window.location.href = './dashboard.html';
    } catch (error) {
      alert('alert-danger', 'Your email or password is incorrect');
    }
  } else {
    alert('alert-danger', 'Please enter proper values for the inputs');
  }
};
