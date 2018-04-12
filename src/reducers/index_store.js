import { combineReducers } from 'redux';
import urlReducer from './urlReducer';
import topButtonReducer from './topButtonReducer';
import contactReducer from './contactReducer';

export default combineReducers({
  url: urlReducer,
  topButton: topButtonReducer,
  contact: contactReducer,
});
