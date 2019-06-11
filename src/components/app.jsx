import React from 'react';



const App = () => {
  return (
    <div className="app">
      <p>React + Redux starter</p>
    </div>
  );
};

export default App;


//lewagon solution
// en esta carpeta solo cargamos lo que ya hemos hecho antes
// con los conatienrs

import React from 'react';
import channelList from '../containers/channel_list';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
       <img className="messaging-logo" src="assets/images/logo.svg" alt="logo" />

     </div>
     <ChannelList />
     <MessageList />


    </div>

    );
};


export default App;
