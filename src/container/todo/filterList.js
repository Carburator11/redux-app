import React from 'react'
import TodoList from './todoList'
import { connect } from 'react-redux'

let test = [{text: 'Learn Redux basis', completed: true}]

const filterView = (list, filter) => {
 // hum..
}


// short version of props.todoList
const FilterList = ({todolist, filter}) => {
        // console.log('[FilterList] todos:', todolist, 'filter:', filter)
        return(
        <div>
            <TodoList list = { todolist } />
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
