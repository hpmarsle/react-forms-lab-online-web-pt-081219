import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateMsg = event => { 
    this.setState({message: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.updateMsg}/>
        <em>You have {this.props.maxChars - this.state.message.length} characters left.</em>
      </div>
    );
  }
}

export default TwitterMessage;
