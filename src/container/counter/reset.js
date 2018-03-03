import React from 'react';
import { connect } from 'react-redux';
import { resetCounter } from '../../actions/';
import { bindActionCreators } from 'redux';

class ResetCounter extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick = { e => {
                e.preventDefault();
                this.props.dispatch(resetCounter())
                }
            }>
            Reset
            </button>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(resetCounter, dispatch) }
  }
  export default connect(mapDispatchToProps)(ResetCounter);