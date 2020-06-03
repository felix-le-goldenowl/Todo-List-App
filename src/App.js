/* eslint-disable no-unused-vars */
/* eslint no-param-reassign: "error" */

import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import NewTodo from './components/newTodo';
import TodoList from './components/todoList';
import FilterTodo from './components/filterTodo';
import './Styles.scss';

const App = () => {
  const taskList = localStorage.getItem('tasks');
  const [tasks, setTasks] = useState(taskList ? JSON.parse(taskList) : []);
  const [task, onChangeTask] = useState({ title: '' });
  const [typeFilter, setTypeFilter] = useState('');
  const [tasksFilter, setTasksFilter] = useState(tasks);

  const addTodo = (e) => {
    e.preventDefault();
    tasks.push(task);
    setTasks(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    onChangeTask({ title: '' });
  };

  const handleChange = (e) => {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title: e.target.value,
      completed: false,
    };
    onChangeTask(newTask);
  };

  const handleRemove = (id) => {
    const newTasks = _.cloneDeep(tasks);
    _.remove(newTasks, (item) => item.id === id);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const handleComplete = (id) => {
    let newTasks = _.cloneDeep(tasks);
    newTasks = newTasks.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setTasks(newTasks);
  };

  const handleCompleteAll = () => {
    let newTasks = _.cloneDeep(tasks);
    newTasks = newTasks.map((item) => {
      item.completed = true;
      return item;
    });
    setTasks(newTasks);
  };

  const handleFilter = (type) => {
    switch (type) {
      case 'all':
        setTypeFilter('all');
        break;
      case 'active':
        setTypeFilter('active');
        break;
      case 'completed':
        setTypeFilter('completed');
        break;
      default:
        setTypeFilter('all');
        break;
    }
  };

  useEffect(() => {
    let ret = tasks;
    switch (typeFilter) {
      case 'all':
        ret = tasks;
        break;
      case 'active':
        ret = tasks.filter((item) => item.completed === false);
        break;
      case 'completed':
        ret = tasks.filter((item) => item.completed === true);
        break;
      default:
        ret = tasks;
        break;
    }
    setTasksFilter(ret);
  }, [typeFilter]);

  return (
    <div>
      <header>
        <h1>todos</h1>
      </header>
      <NewTodo
        addTodo={addTodo}
        handleChange={handleChange}
        handleCompleteAll={handleCompleteAll}
        task={task}
        tasks={tasks}
      />
      <TodoList
        tasks={tasks}
        handleRemove={handleRemove}
        handleComplete={handleComplete}
      />
      <FilterTodo handleFilter={handleFilter} />
    </div>
  );
};

export default App;
