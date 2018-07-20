class Colorful extends React.Componet {
  render() {
    return (
      <div style={{color: "red", fontSize: 72 }}>Big Red</div>
    );
  }
};


const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
};

class Colored extends React.Component {
  render() {
    return (
      <div style={styles}>Style ME!</div>
    );
  }
};