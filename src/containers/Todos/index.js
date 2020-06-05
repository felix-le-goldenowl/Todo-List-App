/* eslint-disable import/no-unresolved */
import React from 'react';
import Filter from 'components/filterList';
import AddTodo from './AddTodo';
import TodoList from './VisibleTodoList';
import './Styles.scss';

const TodosPage = () => {
  return (
    <div>
      <header>
        <h1>todos</h1>
      </header>
      <AddTodo />
      <TodoList />
      <Filter />
    </div>
  );
};

export default TodosPage;
