/* eslint-disable import/no-unresolved */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, toggleAllTodo } from 'actions';

const NewTodo = ({ onAddTodo, onToggleAllTodo, todos }) => {
  const [input, setInput] = useState('');
  const submit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    onAddTodo(input);
    setInput('');
  };
  return (
    <form onSubmit={submit} className="new-todo">
      <input
        placeholder="What needs to be done?"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      {todos.length > 0 && (
        <span
          role="button"
          onClick={() => onToggleAllTodo()}
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

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onAddTodo: (title) => dispatch(addTodo(title)),
  onToggleAllTodo: () => dispatch(toggleAllTodo()),
});

NewTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  onToggleAllTodo: PropTypes.func.isRequired,
  todos: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
