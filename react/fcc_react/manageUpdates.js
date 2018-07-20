class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate() {
    console.log("Component is about to update...");
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props);
    console.log(this.props.nextProps);
  }

  componentDidUpdate() {
    console.log("Component has been updated");
  }


  render() {
    return <h1>{this.props.message}</h1>
  }

};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'First message'
    };
    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage() {
    this.setState({
      message: 'Second Message'
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message} />
      </div>
    )
  }
}