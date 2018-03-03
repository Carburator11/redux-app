import React from 'react';
import { connect } from 'react-redux';
import { decrementCounter } from '../../actions/';
import { bindActionCreators } from 'redux';

class DecrementCounter extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button onClick = { e => {
                e.preventDefault();
                this.props.dispatch(decrementCounter())
                }
            }>
            -
            </button>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(decrementCounter, dispatch) }
  }
  export default connect(mapDispatchToProps)(DecrementCounter);