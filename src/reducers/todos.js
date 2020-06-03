/* eslint-disable no-case-declarations */
import _ from 'lodash';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TOGGLE_ALL_TODO,
} from '../constants';

const initialState = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodos = [
        ...state,
        {
          id: action.id,
          title: action.title,
          completed: false,
        },
      ];
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    }
    case TOGGLE_TODO: {
      const newTodos = state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    }
    case REMOVE_TODO: {
      const stateClone = _.cloneDeep(state);
      _.remove(stateClone, (todo) => todo.id === action.id);
      localStorage.setItem('todos', JSON.stringify(stateClone));
      return stateClone;
    }
    case TOGGLE_ALL_TODO: {
      const newTodos = state.map((todo) => ({ ...todo, completed: true }));
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    }
    default:
      return state;
  }
};

export default todos;
