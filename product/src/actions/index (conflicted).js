import axios from 'axios';
import qs from 'qs';

// let AUTH_TOKEN = '';
// "Wd_8f1a37d762bacdf76c03b7831ee3f2c6";
// make uid ..
// get auth_token from node_modules
// save token to local

const baseURL = `http://r2u.skoopmedia.co.kr`;

export const FETCH_ITEMS = 'FETCH_ITEMS';


export function fetchItems() {
  // const requestUid = {
  //   model_name: 'iPhone',
  //   platform: 1,
  //   os_ver: 7
  // };

  const formData = {
    auth_token: '',
    page: 0,
    page_count: 10000
  };


  const data = new FormData();
  data.auth_token = '';
  data.model_name = 'iPhone';
  data.platform = 1;
  data.os_ver = 7;
  data.page = 0;
  data.page_count = 10000;

  return function(dispatch) {
    axios.post(`${baseURL}/api/device/create`, qs.stringify({
        model_name: 'iPhone',
        platform: 1,
        os_ver: 7
      })
    )
      .then(response => {
        console.log('response1', response.data.result.auth_token);
      })
      .catch(error => {
        console.log(error);
      });


    // axios.post(`${baseURL}/api/product/index`,
    //   qs.stringify({formData}),
    //   { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
    // )
    //   .then(response => {
    //     console.log('response2', response);
    //
    //     dispatch({
    //       type: FETCH_ITEMS,
    //       payload: response.data
    //     });
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

  }

}


