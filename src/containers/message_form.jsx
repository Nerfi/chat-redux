import React from 'react';

//connecting to redux
import { connect } from 'react-redux';


const MesssageForm = (props) => {
  return(
       <div>

       </div>
    );
}

// idk if its correct
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
 handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
 render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


//lewagon solution

import React,  { component } from 'react';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { createMessage } from '../actions/index';

class MesssageForm extends component {
  constructor(props) {
    super(props);
    this.state = { value: ''};
  }

  componentDidMount() {
    this.messageBox.focus();// why this ?
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    //I guees we do this to get the value, the content
    //itself, text
  }

handleSubmit = (event) => {
  event.preventDefault(); //why preventDefault ?
  this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
  this.setState({ value: '' }); // reset message input
}


render() {
  return (

         <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          ref={(input) => { this.messageBox = input; }}
          type="text"
          className="form-control"
          autoComplete="off"
          value={this.state.value}
          onChange={this.handleChange}
        />
      <button type="submit">Send</button>
    </form>

    );
}

}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
