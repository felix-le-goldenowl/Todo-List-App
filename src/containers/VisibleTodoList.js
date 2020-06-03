import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants';
import TodoList from '../components/todoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter((todo) => !todo.completed);
    case SHOW_COMPLETED:
      return todos.filter((todo) => todo.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  removeTodo: (id) => dispatch(removeTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
