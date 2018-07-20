class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("Hello there componentWillMount()");
  }

  render() {
    return <div />
  }
}