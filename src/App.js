import React from 'react';
import AddTodo from './containers/AddTodo';
import TodoList from './containers/VisibleTodoList';
import Filter from './components/filterList';
import './Styles.scss';

const App = () => {
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

export default App;
