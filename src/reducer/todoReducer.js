import * as actionType from '../actions/actionType'

let initialState = {
    todos: [
        {text: 'Learn Redux basis', completed: true},
        {text: 'Do the counter tutorial', completed: true},
        {text: 'Do the todo app tutorial', completed: true},
        {text: 'Practice React-Redux', completed: false},
        {text: 'Practice again and again', completed: false},
    ],
    filter: actionType.filters.all
}

const todoReducer = (state = initialState, action) => {
    let newTodos;
    switch(action.type){

        case actionType.ADD_TODO:
            newTodos = [...state.todos, {text: action.text, completed: false} ]; 
            return {todos: newTodos, filter: state.filter}
        
        case actionType.REMOVE_TODO:
            newTodos = [...state.todos];
            newTodos.splice(action.index, 1);
            return {todos: newTodos, filter: state.filter}

        case actionType.TOGGLE_COMPLETE:
            newTodos = [...state.todos];
            newTodos[action.index].completed = !newTodos[action.index].completed
            return {todos: newTodos, filter: state.filter}

        case actionType.FILTER:
            console.log('[Filter-reducer]', action.filter)
            return {todos: [...state.todos], filter: action.filter}
 
        default:
            return state;
    }


    return state
}




export default todoReducer