

import React from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../actions/';
import { bindActionCreators } from 'redux';

class AddCounter extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick = { e => {e.preventDefault();this.props.dispatch(addCounter())}  }>Add Counter
            </button>
        )
    }


}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(addCounter, dispatch) }
  }
  export default connect(mapDispatchToProps)(AddCounter);