// TODO: add and export your own actions

export function createMessage(channel, author, content) {
  // TODO
}


export function fetchMesaages() {
 return fetch('https://wagon-chat.herokuapp.com/general/messages');

 .then(response => response.json())
 .then((data) => {
 return {
 type: 'FETCH_MESSAGES', // idk how to name the type
 payload: data // here we need a promise
 };
 });
}


const body = { key: value, key2: value2, etc: 'etc...' };
const promise = fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
}).then(r => r.json());


//lewagon solution


const BASE_URL = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';
export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';

export function fetchMessages(channel) {
  const url = '${BASE_URL}/${channel}/messages';
  const promise = fetch(url).then(r => r.json());
  return {
    type: FETCH_MESSAGES,
    payload: promise
  };

}


export function createMessage(channel, author, content){
  const url = '${BASE_URL}/${channel}/messages';
  const body = {author, content};
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
       'Content-Type': 'application/json'
    },
    body: JSON.stringify(body) // we want string on the body
    // because is and chat app?
  }).then(r => r.json());
}
