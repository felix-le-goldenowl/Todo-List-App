import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = ({ tasks, handleRemove, handleComplete }) => {
  return (
    <ul className="todo-list">
      {Array.isArray(tasks) &&
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            handleRemove={handleRemove}
            handleComplete={handleComplete}
          />
        ))}
    </ul>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.instanceOf(Array).isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleComplete: PropTypes.func.isRequired,
};

export default TodoList;
