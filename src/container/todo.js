import React from 'react'
import { connect } from 'react-redux'
import TodoItem from '../components/todoItem'

class Todo extends React.Component{

  constructor(props){
    super(props);
    this.test = ['test'];
  }
  

  render(){
    return (
        <div>
          <h2>To do List</h2>
            <ul>
              {this.props.todolist.map(item =>{ 
                let id = 0;
                id++;
                return < TodoItem key = {id} text= {item} /> }) }
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