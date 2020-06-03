import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ task, handleRemove, handleComplete }) => {
  const { completed, id } = task;
  return (
    <li>
      <div className={`item${completed ? `-completed` : ``}`}>
        <span
          role="button"
          tabIndex="0"
          onKeyDown={() => {}}
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
  task: PropTypes.instanceOf(Object).isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleComplete: PropTypes.func.isRequired,
};

export default TodoItem;
