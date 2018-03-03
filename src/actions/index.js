import * as actionType from './ActionType';

export const incrementCounter = () => ({
  type: actionType.INCR_COUNTER,
  payload: 1
});

export const decrementCounter = () => ({
  type: actionType.DECR_COUNTER,
  payload: 1
});

export const resetCounter = () => ({
  type: actionType.RESET_COUNTER,
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
