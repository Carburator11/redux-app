import React from 'react';
import { connect }    from 'react-redux';
import { filter } from '../../actions/';
import * as actionType   from '../../actions/actionType';
import { bindActionCreators } from 'redux';

class FilterLink extends React.Component {
    constructor(props){
        super(props);
    }

    onTodoClick(e, nextFilter){
        console.log('[FilterLink]', nextFilter);
        this.props.dispatch(filter( nextFilter ))
        e.preventDefault();
    }

    render(){
        return (
        <span>
            <h4>Filter:</h4>
            <a href='' onClick= {e => this.onTodoClick(e, actionType.filters.all)}>All</a>,{' '}
            <a href='' onClick= {e => this.onTodoClick(e, actionType.filters.completed)}>Completed</a>,{' '} 
            <a href='' onClick= {e => this.onTodoClick(e, actionType.filters.active)}>Active</a>
        </span>)
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(filter, dispatch) }
  }
  export default connect(mapDispatchToProps)(FilterLink);