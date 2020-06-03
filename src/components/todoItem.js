import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ task, handleRemove, handleComplete }) => {
  const { completed, id } = task;
  return (
    <li>
      <div className={`item${completed ? `-completed` : ``}`}>
        <span
          className="material-icons cancel"
          onClick={() => handleRemove(id)}
        >
          cancel
        </span>
        <span className="task-title">{task.title}</span>
      </div>
      <input
        checked={completed}
        type="checkbox"
        name="done"
        onChange={() => handleComplete(id)}
      />
    </li>
  );
};

TodoItem.propTypes = {
  task: PropTypes.object,
  handleRemove: PropTypes.func,
  handleComplete: PropTypes.func,
};

export default TodoItem;
