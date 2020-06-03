/* eslint-disable no-case-declarations */
import _ from 'lodash';
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  TOGGLE_ALL_TODO,
} from '../constants';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );
    case REMOVE_TODO:
      const stateClone = _.cloneDeep(state);
      _.remove(stateClone, (todo) => todo.id === action.id);
      return stateClone;
    case TOGGLE_ALL_TODO:
      return state.map((todo) => ({ ...todo, completed: true }));
    default:
      return state;
  }
};

export default todos;
