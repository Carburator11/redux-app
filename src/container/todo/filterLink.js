import React from 'react';
import { connect }    from 'react-redux';
import { filterTodo } from '../../actions/';
import * as actionType   from '../../actions/actionType';
import { bindActionCreators } from 'redux';

class FilterLink extends React.Component {
    constructor(props){
        super(props);
    }

    onTodoClick(e, filter){
        console.log('[FilterLink]', filter)
        e.preventDefault();
    }

    render(){
        return (
        <span>
            <h4>Filter:</h4>
            <a href='' onClick= {e => this.onTodoClick(e, actionType.filters.all)}>All</a>,{' '}
            <a href='' onClick= {e => this.onTodoClick(e, actionType.filters.completed)}>Completed</a>,{' '} 
            <a href='' onClick= {e => this.onTodoClick(e, actionType.filters.done)}>Done</a>
        </span>)
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(filterTodo, dispatch) }
  }
  export default connect(mapDispatchToProps)(FilterLink);