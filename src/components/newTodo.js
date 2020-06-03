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
        <span onClick={() => handleCompleteAll()} className="material-icons">
          arrow_circle_down
        </span>
      )}
    </form>
  );
};

NewTodo.propTypes = {
  addTodo: PropTypes.func,
  handleChange: PropTypes.func,
  handleCompleteAll: PropTypes.func,
  task: PropTypes.object,
  tasks: PropTypes.array,
};

export default NewTodo;
