import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resetCounter } from '../actions/';

import ReduxCounter from './reduxCounter'
import LocalCounter from './localCounter';
import Button from './button';

class App extends Component{
    constructor(props){
        super(props)
        this.state={ localCount: 0 }
        this.localStateIncr = this.localStateIncr.bind(this);
        this.localStateDecr = this.localStateDecr.bind(this);
        this.reset = this.reset.bind(this);  
    }
    localStateIncr(){
        this.setState(prevState => ({localCount: prevState.localCount + 1}) )
    }

    localStateDecr(){
        this.setState(prevState =>  ({localCount: prevState.localCount - 1}))
    }
    reset(){
        const { resetCounter } = this.props
        this.setState({localCount: 0}) 
        resetCounter();
    }

    render(){
        const { reduxCount } = this.props;
        const { localCount } = this.state;
        return(
            <div style = {{'margin': 40}} >
                <h1>My redux app</h1>
                <ReduxCounter/>
                <LocalCounter 
                    count={this.state.localCount}
                    incr={this.localStateIncr}
                    decr={this.localStateDecr}
                />
                <h4>Total: {localCount * reduxCount}</h4>
                <Button placeholder="Reset" onClick={this.reset}/>
            </div>)
    }
}

const mapStateToProps = ({ reduxCount }) =>  ({ reduxCount })
const mapDispatchToProps = dispatch => ({ resetCounter: () => dispatch(resetCounter()) })

export default connect(mapStateToProps, mapDispatchToProps)(App)