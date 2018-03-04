import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleComplete } from '../../actions/';
import RemoveTodo from './removeTodo';

const TodoItem = (props) => {
    //console.log('[TodoItem]', props)
    return (
        <li>
            <span
                style = {props.complete?{'textDecoration': 'line-through'}:{'textDecoration':'none'} }
                onClick = {
                    e => {
                        e.preventDefault();
                        console.log('[ToggleComplete]', props);
                        props.dispatch(toggleComplete( props.id ))
                    }
                }
            >
                {JSON.stringify(props.text)}
            </span>
                {'  '}
                <RemoveTodo id = {props.id}/>
        </li>
    )
    
}
function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(toggleComplete, dispatch) }
  }
  export default connect(mapDispatchToProps)(TodoItem);
