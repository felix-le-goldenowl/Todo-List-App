import React from 'react';
import PropTypes from 'prop-types';

const NewTodo = ({ handleCompleteAll, addTodo, handleChange, task, tasks }) => {
  return (
    <form onSubmit={(e) => addTodo(e)} className="new-todo">
      <input
        onChange={(e) => handleChange(e)}
        placeholder="What needs to be done?"
        value={task.title}
      />
      {tasks.length > 0 && (
        <span
          role="button"
          onClick={() => handleCompleteAll()}
          className="material-icons"
          onKeyDown={() => {}}
          tabIndex={0}
        >
          arrow_circle_down
        </span>
      )}
    </form>
  );
};

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCompleteAll: PropTypes.func.isRequired,
  task: PropTypes.instanceOf(Object).isRequired,
  tasks: PropTypes.instanceOf(Array).isRequired,
};

export default NewTodo;
