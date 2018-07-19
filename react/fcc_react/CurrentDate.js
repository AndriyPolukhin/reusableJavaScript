// Child component receives information from the parent
const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p> {/* Receive */}
    </div>
  );
};

// Parent Component sends information to the Child
class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h3>What data is it?</h3>
      <CurrentDate date={Date()} /> {/* Send */}
      </div>
    );
  }
};