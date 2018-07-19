import React, { PropTypes } from 'react';

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};


{/* Set the propTypes check for PropTypes*/}
Items.propTypes = { quantity: PropTypes.number.isRequired }

Items.default = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
}