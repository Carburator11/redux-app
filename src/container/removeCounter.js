import React from 'react';
import { connect } from 'react-redux';
import { removeCounter } from '../actions/';
import { bindActionCreators } from 'redux';

class RemoveCounter extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick = { e => {e.preventDefault();this.props.dispatch(removeCounter())}  }>Remove Counter
            </button>
        )
    }


}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(removeCounter, dispatch) }
  }
  export default connect(mapDispatchToProps)(RemoveCounter);