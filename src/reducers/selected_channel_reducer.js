
export default function(state = null, action) {
  switch (action.type) {
    default:
      return state;
  }
}


//lewagon solution

import { CHANNEL_SELECTED } from '../actions';

export default function(state = null, action ) {
  switch (action.type) {
    case CHANNEL_SELECTED: {
      return action.payload; // devolvemos el channel selected

    }

    default: {
      return state;
    }
  }
}
