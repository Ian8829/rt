import { FETCH_ITEMS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return [ ...action.payload.result.product_infos, ...state ];
  }
  return state;
}