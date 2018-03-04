import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/';
import { bindActionCreators } from 'redux';

class AddTodo extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        let input;
        return(
            <form 
                onSubmit = { e => {
                    e.preventDefault();
                    console.log('[FORM]', input.value);
                    this.props.dispatch(addTodo(input.value));
                    }
                }
            >
            <input ref = { node => { input = node } } />
            <button type = 'submit' >Add</button>
            </form>
        )
    }


}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(addTodo, dispatch) }
  }
  export default connect(mapDispatchToProps)(AddTodo);