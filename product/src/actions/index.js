import axios from 'axios';
import qs from 'qs';

// const AUTH_TOKEN = "HK_684871e6ff64ac0b5eb4f3c1fcba3c92";
const baseURL = `http://r2u.skoopmedia.co.kr`;

export const FETCH_ITEMS = 'FETCH_ITEMS';

export function fetchItems() {
  const formData = {
    auth_token: 'HK_684871e6ff64ac0b5eb4f3c1fcba3c92',
    page: 0,
    page_count: 1000
  };

  return function(dispatch) {
    axios.post(`${baseURL}/api/product/index`, qs.stringify({formData}))
      .then(response => {
        dispatch({
          type: FETCH_ITEMS,
          payload: response.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

