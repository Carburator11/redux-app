import * as actionType from './ActionType';

export const addCounter = () => ({
  type: actionType.ADD_COUNTER,
  payload: 1
});

export const removeCounter = () => ({
  type: actionType.REMOVE_COUNTER,
  payload: 1
});

export const addTodo = (text) => ({
  type: actionType.ADD_TODO,
  text
});

export const removeTodo = (index) => ({
  type: actionType.REMOVE_TODO,
  index
});

export const toggleComplete = (index) => ({
  type: actionType.TOGGLE_COMPLETE,
  index
});
