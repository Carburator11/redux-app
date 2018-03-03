import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/';
import { bindActionCreators } from 'redux';

class RemoveTodo extends React.Component{
    constructor(props){
        super(props);
      }
      
    render(){
        return (
            <span className = 'removeTodo'>
                [<a href='' onClick= {
                    e => {
                        e.preventDefault();
                        console.log('[RemoveTodo]', this.props);
                        this.props.dispatch(removeTodo(this.props.id));
                    }
                }>
                x
                </a>]
            </span>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(removeTodo, dispatch) }
  }
  export default connect(mapDispatchToProps)(RemoveTodo);
