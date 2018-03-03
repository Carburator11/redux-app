import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCounter } from '../../actions/';

class IncrementCounter extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick = { e => {
                e.preventDefault();
                this.props.dispatch(incrementCounter())
                } 
            }>
            +
            </button>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(incrementCounter, dispatch) }
  }
  export default connect(mapDispatchToProps)(IncrementCounter);