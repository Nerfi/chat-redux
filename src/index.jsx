// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

//lewagon solution i think its because we want
// the state to be null

const identityReducer = (state = null) => state;

//const initialState = {
  // juan:trying to set up the redux state tree
  //messages: [],
  //channels: null,// we need some channels idk why is not null
  //selectedChannel: ??,
  //username:

//};

//juan combineReducers

//const reducers = combineReducers({
  //messages:
  //channels:
  //currentUser:
  //selectedChannel:

//});

//lewagon
const initialState = {
  messages: [],
  channels: [ 'general', 'react', 'paris' ],
  currentUser: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  //idk why we do this in line 30?
  selectedChannel: 'general'
};

//lewagon reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: selectedChannelReducer
});


// middleWares, leagon solution
const store = createStore(reducers, initialState, middlewares);
const middlewares = applyMiddleware(reduxPromise,logger);


// render an instance of the component in the DOM
ReactDOM.render(
  //in line 68 we call the const like the promise for the API
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
