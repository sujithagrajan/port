import { SEND_EMAIL } from '../actions/types';

export default function(state = { loading: 'new', success: false }, action) {
  switch (action.type) {
    case SEND_EMAIL:
      return action.payload;

    default:
      return state;
  }
}
