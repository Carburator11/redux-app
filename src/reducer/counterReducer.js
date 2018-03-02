import * as actionType from '../actions/actionType'


const counterReducer = (state = 0, action) => {
    let newState;
    switch(action.type){
        case actionType.ADD_COUNTER:
            newState = state + action.payload; 
            return newState
        case actionType.REMOVE_COUNTER:
            newState = state - action.payload; 
            return newState
        default:
            return state;
    }


    return state
}



export default counterReducer