import React  from 'react';
import {getFunName } from '../helpers';

class StorePicker extends React.Component {

  myInput = React.createRef();
  goToStore = (event) => {
    // 1. Stop the form from submitting/refreshing the page
    event.preventDefault();
    // 2. Get the text from the input
    const storeName = this.myInput.value.value;
    // 3. Change the page to /store/whatever-is-enetered
    this.props.history.push(`/store/${storeName}`);

  };
  render() {
    return (
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Pleaes Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store -></button>
        </form>
    );
  }
}

export default StorePicker;