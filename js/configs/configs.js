export const BASE_URL = 'https://rocky-sierra-47757.herokuapp.com';

export const header = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage
      .getItem('jwt')
      .replace(/^"(.*)"$/, '$1')}`,
  },
};
console.log(header);
