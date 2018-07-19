{/* THe Child receives the quantety value and assigns to the component on render*/}
const Items = (props) => {
  return <h1>Current Quantety of Items in Cart: {props.quantity}</h1>
}

{/* The Default props are not used if overiden*/}
Items.defaultProps = {
  quantity: 0;
}

{/* Parent Sends the quantety props value to the child */}
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10} />
  }
};