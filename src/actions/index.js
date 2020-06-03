/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_ALL_TODO,
} from '../constants';

export const addTodo = (title) => ({
  type: ADD_TODO,
  id: Math.floor(Math.random() * 1000),
  title,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

export const toggleAllTodo = () => ({
  type: TOGGLE_ALL_TODO,
});

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
});
