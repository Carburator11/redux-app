import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <h4 style = { this.props.count < 0 ?{'color': 'red'}:{'color':'inherit'} }>
        {this.props.count}
        </h4>
    )
  }

}



function mapStateToProps(state){
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(Counter);