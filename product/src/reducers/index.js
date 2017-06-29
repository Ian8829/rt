import { combineReducers } from 'redux';
import activeItem from './activeItem';

const rootReducer = combineReducers({
  items: activeItem,
});

export default rootReducer;
