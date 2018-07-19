// Stateless functional component
const ChildComponent = () => {
  return (
    <div>
      <p>I am a child</p>
    </div>
  );
};

// Component with Composition

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
}