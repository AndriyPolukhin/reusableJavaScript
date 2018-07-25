class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const message = this.state.input;
    this.setState({
      messages: [...this.state.messages, message],
      input: ''
    });
  }

  render() {
    const toRenderMessage = this.state.message;
    const renderMessage = toRenderMessage.map(message => (
      <li key={message}>{message}</li>
    ));

    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button type="submit" onClick={this.submitMessage}>
          Add message
        </button>
        <ul>{renderMessage}</ul>
      </div>
    );
  }
}
