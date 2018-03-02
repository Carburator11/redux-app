import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
        <h2>Counter:  {this.props.count}</h2>
    )
  }

}



function mapStateToProps(state){
  return {
    count: state.counterReducer,
  };
}
export default connect(mapStateToProps)(Counter);