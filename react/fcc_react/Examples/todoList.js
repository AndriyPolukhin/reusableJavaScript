
// Child component accepts the properties and provides a display way.
const List = (props) => {
  return <p>{props.tasks.join(', ')}</p>
};


// Parent Component provides the properties arguments to the child
class Todo extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          <List tasks={["Learn React", "Find a perfect job"]} />
          <h2>Tommorow</h2>
          <List tasks={["Practice React", "Complete the assignment", "Celebrate"]} />
        </div>
      )
    }
}

List.defaultProps = { tasks: 0 };