import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';

const myApp = combineReducers({
  counterReducer, todoReducer
})

export default myApp
// Default export, independently from its name, is automatically injected into import variable;