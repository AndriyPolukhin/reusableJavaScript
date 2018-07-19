const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypeOfFood extends React.Compoment {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Types of Food:</h1>
      <Fruits />
    );
  }
};