import React from 'react';
import PropTypes from 'prop-types';

const FilterTodo = ({ handleFilter }) => {
  return (
    <ul className="filters">
      <li
        role="presentation"
        onClick={() => handleFilter('all')}
        onKeyPress={() => {}}
      >
        <a href="/#">All</a>
      </li>
      <li
        role="presentation"
        onClick={() => handleFilter('active')}
        onKeyDown={() => {}}
      >
        <a href="/#">Active</a>
      </li>
      <li
        role="presentation"
        onClick={() => handleFilter('completed')}
        onKeyDown={() => {}}
      >
        <a href="/#">Completed</a>
      </li>
    </ul>
  );
};

FilterTodo.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterTodo;
