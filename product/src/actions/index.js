import axios from 'axios';
import qs from 'qs';
// const fetch = require('node-fetch');


const AUTH_TOKEN = "HK_684871e6ff64ac0b5eb4f3c1fcba3c92";
const baseURL = `http://r2u.skoopmedia.co.kr`;

export const FETCH_ITEMS = 'FETCH_ITEMS';


export function fetchItems() {
  const formData = {
    auth_token: AUTH_TOKEN,
    page: 0,
    page_count: 10000
  };

  const data = new FormData();
  data.auth_token = AUTH_TOKEN;
  data.page = 0;
  data.page_count = 10000;

  return function(dispatch) {
    axios.post(`${baseURL}/api/product/index`, qs.stringify({formData}), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(response => {
        console.log('response', response);

        dispatch({
          type: FETCH_ITEMS,
          payload: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });

  }

}


// const url = `http://r2u.skoopmedia.co.kr/api/product/index`;
// const formData = {
//   auth_token: 'HK_684871e6ff64ac0b5eb4f3c1fcba3c92',
//   page: 0,
//   page_count: 1000
// };
//
// async function fetchItems() {
//   const response = await axios.post(url, qs.stringify({formData}))
//   const body = await response.json();
//
//   if (response.status !== 200)
//     throw Error(body.message);
//
//   return body;
// }
//
// async function showResults(handle) {
//   try {
//     const user = await fetchItems(handle);
//     console.log(user.count);
//     console.log(user.price);
//   } catch (err) {
//     console.log(`Error: ${err.message}`);
//   }
// }
//
// showResults(formData);
