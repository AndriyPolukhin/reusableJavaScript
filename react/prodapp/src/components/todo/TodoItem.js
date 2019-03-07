import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = (props) => {
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={props.isComplete}
      /> {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool
}