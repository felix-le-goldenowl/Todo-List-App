import React from 'react';
import PropTypes from 'prop-types';

const FilterTodo = ({ handleFilter }) => {
  return (
    <ul className="filters">
      <li onClick={() => handleFilter('all')}>
        <a href="/#">All</a>
      </li>
      <li onClick={() => handleFilter('active')}>
        <a href="/#">Active</a>
      </li>
      <li onClick={() => handleFilter('completed')}>
        <a href="/#">Completed</a>
      </li>
    </ul>
  );
};

FilterTodo.propTypes = {
  handleFilter: PropTypes.func,
};

export default FilterTodo;
