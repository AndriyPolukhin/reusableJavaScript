// mapStateToProps
const state = [];

const mapStateToProps = state => ({ message: state });

// mapDispatchToProps

const addMessage = message => ({
  type: 'ADD',
  message
});

const mapDispatchToProps = dispatch => ({
  submitNewMessage(message) {
    dispatch(addMessage(message));
  }
});
