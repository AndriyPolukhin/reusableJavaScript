# ReactDOM
ReactDOM.render(componentToRender, targetNode)


# Create a Rect Component
## Stateles Functional
const MyComponent = function() {
  return (
    <div>Hello</div>
  );
}

## Based on class and state change
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}


# Create a COmponent iwth Composition
return (
  <App>
    <Navbar />
    <Dashboard />
    <Footer />
  </App>
)

# Render component to the DOM
ReactDOM.render(<ComponentToRender />, targetNode).