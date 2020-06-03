import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ children, active, setFilter }) => {
  return (
    <button type="button" disabled={active} onClick={setFilter}>
      {children}
    </button>
  );
};

FilterItem.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
};

export default FilterItem;
