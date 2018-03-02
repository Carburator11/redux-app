import React from 'react'
import { connect } from 'react-redux'
import TodoItem from '../components/todoItem'

class Todo extends React.Component{

  constructor(props){
    super(props);
  }
  

  render(){
    return (
        <div>
          <h2>To do List</h2>
            <ul>
              {this.props.todolist.map((item, index) =>{ 
                console.log('[Todo]', item, index);
                return < TodoItem
                  id= {index}
                  key = {index} 

                  text= {item.text}
                  complete = {item.completed}
                  onTodoClick = {index => dispatch(toggleTodo(index))}
                /> }) }
            </ul>
        </div>)
  }
}
      

  

function mapStateToProps(state){
  return {
      todolist: state.todoReducer,
  };
}
export default connect(mapStateToProps)(Todo);