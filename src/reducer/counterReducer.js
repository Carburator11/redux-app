import * as actionType from '../actions/actionType'


const counterReducer = (state = 0, action) => {
    let newState;
    switch(action.type){
        case actionType.INCR_COUNTER:
            newState = state + action.payload; 
            return newState
        case actionType.DECR_COUNTER:
            newState = state - action.payload; 
            return newState
        case actionType.RESET_COUNTER:
            return 0


        default:
            return state;
    }


    return state
}



export default counterReducer