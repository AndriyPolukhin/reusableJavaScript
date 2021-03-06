class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Andriy'
    };
  }
  render() {
    return (
      <div>
          <h1>{this.state.name}</h1>
      </div>
    )
  }
}


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Anastasia'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

class MyComponentTwo extends React.Component {
  constructor(porps) {
    super(props);
    this.state ={
      name: 'Anastasia'
    };
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      name: 'React Rocks!'
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};