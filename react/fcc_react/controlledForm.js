class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      sumbit: this.state.input
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
           <input type="text" onChange={this.handleChange} value={this.state.input} />
           <button type="submit">Submit</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
};