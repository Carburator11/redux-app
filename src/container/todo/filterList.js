import React from 'react'
import TodoList from './todoList'
import { connect } from 'react-redux'
import * as actionType from '../../actions/actionType'


const filterView = (list, filter) => {
    let result = []
    console.log('[Filter-view] Switch?', filter)
    switch(filter){
        case actionType.filters.all:
            return list

        case actionType.filters.completed:
        console.log('[Filter-view] Switch: compl')
            list.forEach( el  => {
                if(el.completed){ result.push(el) }
            });
            return result

        case actionType.filters.active:
        console.log('[Filter-view] Switch: act')
            list.forEach( el  => {
                if(!el.completed){ result.push(el) }
            });
            return result

        default:
            return list        
    }
}


// short version of props.todoList
const FilterList = ({todolist, filter}) => {
        console.log('[FilterList] todos:', todolist, 'filter:', filter)
        let view = filterView(todolist, filter)
        console.log('[FilterList] Filtered todos:', view)
        return(
        <div>
            <TodoList list = { view } />
        </div>)
    }

function mapStateToProps(state){
    // console.log('[FilterList] state:', state)
    return {
        todolist: state.todoReducer.todos,
        filter: state.todoReducer.filter
    };
  }
  export default connect(mapStateToProps)(FilterList);
