import React from 'react';
import TodoItem from './todoItem';
import PropTypes from 'prop-types';

const TodoList = ({ tasks, handleRemove, handleComplete }) => {
  return (
    <ul className="todo-list">
      {Array.isArray(tasks) &&
        tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            handleRemove={handleRemove}
            handleComplete={handleComplete}
          />
        ))}
    </ul>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.array,
  handleRemove: PropTypes.func,
  handleComplete: PropTypes.func,
};

export default TodoList;
