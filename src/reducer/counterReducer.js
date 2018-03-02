import * as actionType from '../actions/actionType'


const counterReducer = (state = 0, action) => {
    let newState;
    switch(action.type){
        case actionType.ADD_COUNTER:
            return state + action.payload;
        default:
            return state;
    }


    return state
}



export default counterReducer