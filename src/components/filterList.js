/* eslint-disable import/no-unresolved */
import React from 'react';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from 'constants';
import Filter from 'containers/Todos/Filter';

const FilterList = () => {
  return (
    <div className="filter">
      <Filter filter={SHOW_ALL}>ALL</Filter>
      <Filter filter={SHOW_ACTIVE}>ACTIVE</Filter>
      <Filter filter={SHOW_COMPLETED}>COMPLETED</Filter>
    </div>
  );
};

export default FilterList;
