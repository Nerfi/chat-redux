import React, { Component } from 'react';

//connecting to redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class MessageList extends Component {
  componentWillMount() {
    this.props.MessageList();
  }
  render(){
    return (
      <div>

      </div>
      );
  }
}


// i thingk this is the correct
const MessageList = (props) => {
  return (
    <li>

    </li>
    );
};

function mapStateToProps(state) {
  return {
    MessageList: state.

  };
}


//export default MessageList;
export default connect(mapStateToProps)

//lewagon solution


import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';


class MessageList extends Component {

  componentWillMount() {
    this.fetchMessages();
  }

  componentDidMount(){
    this.refresher = setInterval(this.fetchMessages,5000);
  }

  componentDidUpdate() {
    this.list.scrolltop = this.list.scrollHeight;
  }

  componentWillUnmount(){
    clearIntereval(this.refresher);
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render () {
    return (
      <div className="channel-container">
       <div className="channel-title">

        <span>Channel #{this.props.selectedChannel}</span>
       </div>

       <div className="channel-content" ref={(list) => {this.list = list;} }>
          {
            this.props.messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })
          }
       </div>
       <MessageForm />

      </div>

      );
  }
}


function mapStateToProps(state) {
  return {
    message: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchMessages}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
