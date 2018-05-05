import * as actionType from './actionType';

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


