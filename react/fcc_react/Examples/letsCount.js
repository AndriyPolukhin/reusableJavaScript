class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Method Binding
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  // Method Declarations
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count -1
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  // Rendering
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment</button>
        <button className='dec' onClick={this.decrement}>Decrement</button>
        <button className='reset' onClick={this.reset}>Reset</button>
      </div>
    );
  }
};