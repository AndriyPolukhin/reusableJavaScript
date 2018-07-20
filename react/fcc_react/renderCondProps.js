class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
        {
          this.props.fiftyFifty ? 'You Win!' : 'You Lose!'
        }
      </h1>
    );
  }
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(proos);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    let expression = Math.random() > .5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {
          <Results
            fiftyFifty={expressoin}
          />
          <p.{'Turn: ' + this.state.counter}</p>
        }
      </div>
    );
  }
};