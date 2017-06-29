import { FETCH_ITEMS } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return [ action.payload.data, ...state ];
  }
  return state;
}