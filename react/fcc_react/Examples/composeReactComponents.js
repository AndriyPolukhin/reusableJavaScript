const Vegetables = () => {
  return (
    <div>
      <h2>Vegetables:</h2>
      <ul>
          <li>Brussel Sprout</li>
          <li>Tomato</li>
          <li>Potato</li>
          <li>Broccoli</li>
          <li>Sqiash</li>
      </ul>
    </div>
  );
};

const NonCitrus = () => {
  return (
    <div>
      <h2>Non-Citrus</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
        <li>Peaches</li>
      </ul>
    </div>
  );
};

const Citrus = () => {
  return (
    <div>
      <h2>Citrus</h2>
      <ul>
        <li>Lemon</li>
        <li>Lime</li>
        <li>Orange</li>
        <li>Grapefruit</li>
      </ul>
    </div>
  );
};

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};


ReactDOM.render(<TypesOfFood />, querySelector("#challenge-node"));