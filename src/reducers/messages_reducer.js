export default function(state = null, action) {
  switch (action.type) {
    default:
      return state;
  }
}


// lewagon solution

import { FETCH_MESSAGES, MESSAGE_POSTED, CHANNEL_SELECTED } from '../actions';

export default function(state = null, action) {
  switch(action.type) {
    case FETCH_MESSAGES: {
      return action.payload.messages; // why payload.messages?
    }

    case MESSAGE_POSTED: {
      const copiedState = state.slice(0);// why?
      copiedState.push(action.payload);
      return copiedState;
    }
    case CHANNEL_SELECTED: {
      return [];
    }
    default:
    return state;
  }
}




