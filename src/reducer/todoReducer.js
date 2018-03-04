import * as actionType from '../actions/actionType'

let initialState = {
    todos: [{text: 'Learn Redux basis', completed: true}, {text: 'Practice Redux', completed: false} ],
    filter: actionType.all
}

const todoReducer = (state = initialState, action) => {
    let newTodos;
    switch(action.type){

        case actionType.ADD_TODO:
            newTodos = [...state.todos, {text: action.text, completed: false} ]; 
            return {todos: newTodos}
        
        case actionType.REMOVE_TODO:
            newTodos = [...state.todos];
            newTodos.splice(action.index, 1);
            return {todos: newTodos}

        case actionType.TOGGLE_COMPLETE:
            newTodos = [...state.todos];
            newTodos[action.index].completed = !newTodos[action.index].completed
            return {todos: newTodos}

        case actionType.FILTER:
            console.log('[Filter-reducer]', action.filter)
            return {filter: action.filter}
 
        default:
            return state;
    }


    return state
}




export default todoReducer