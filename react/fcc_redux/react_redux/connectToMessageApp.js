// REDUX:
const ADD = 'ADD';

const addMesasge = message => {
  return {
    type: ADD,
    message: message
  };
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// REACT

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      // messages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage(e) {
    e.preventDefault();
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      // messages: this.state.messages.concat(currentMessage)
      messages: this.props.submitNewMessage(currentMessage);
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map((message, idx) => {
            return <li key={idx}>{message}</li>;
          })}
        </ul>
      </div>
    );
  }
}

// REACT-REDUX

const mapStateToProps = state => {
  return { messages: state };
};

const mapDispatchToProps = dispatch => {
  return {
    submitNewMessage: newMessage => {
      dispatch(addMessage(newMessage));
    }
  };
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}
