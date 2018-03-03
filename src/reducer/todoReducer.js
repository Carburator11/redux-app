import * as actionType from '../actions/actionType'

const todoReducer = (state = [{text: 'Learn Redux basis', completed: true}, {text: 'Practice Redux', completed: false} ], action) => {
    let newState = [];
    switch(action.type){

        case actionType.ADD_TODO:
            newState = [...state, {text: action.text, completed: false} ]; 
            return newState
        
        case actionType.REMOVE_TODO:
            newState = [...state];
            newState.splice(action.index, 1);
            return newState

        case actionType.TOGGLE_COMPLETE:
            newState = [...state];
            newState[action.index].completed = !state[action.index].completed
            return newState

        default:
            return state;
    }


    return state
}




export default todoReducer