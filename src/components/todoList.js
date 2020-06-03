import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './todoItem';

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <ul className="todo-list">
      {Array.isArray(todos) &&
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleRemove={removeTodo}
            handleComplete={toggleTodo}
          />
        ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.instanceOf(Array).isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
