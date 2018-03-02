import * as actionType from '../actions/actionType'

const todoReducer = (state = ['no data', 'test'], action) => {
    let newState = [];
    switch(action.type){
        case actionType.ADD_TODO:
            newState = [...state, action.text ]; 
            return newState

        default:
            return state;
    }


    return state
}




export default todoReducer