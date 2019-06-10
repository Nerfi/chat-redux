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
