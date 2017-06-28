import { combineReducers } from 'redux';
import itemAll from './itemAll';
import ActiveItem from './activeItem';

const rootReducer = combineReducers({
  items: itemAll,
  activeItem: ActiveItem
});

export default rootReducer;
