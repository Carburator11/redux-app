import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleComplete } from '../actions/';
import RemoveTodo from '../container/removeTodo';

class TodoItem extends React.Component{
    constructor(props){
        super(props);
      }
      
      render(){
        return (
            <li
                id = {this.props.key}
            >
            <span
                style = {this.props.complete?{'textDecoration': 'line-through'}:{'textDecoration':'none'} }
                onClick = {
                    e => {
                        e.preventDefault();
                        console.log('[ToggleComplete]', this.props);
                        this.props.dispatch(toggleComplete( this.props.id ))
                    }
                }
            >
                {JSON.stringify(this.props.text)}
            </span>
                {'  '}
                <RemoveTodo id = {this.props.id}/>
            </li>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(toggleComplete, dispatch) }
  }
  export default connect(mapDispatchToProps)(TodoItem);
