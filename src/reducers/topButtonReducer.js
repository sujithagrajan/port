import { CHECK_TOP_BUTTON } from '../actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case CHECK_TOP_BUTTON:
      return action.payload;

    default:
      return state;
  }
}
