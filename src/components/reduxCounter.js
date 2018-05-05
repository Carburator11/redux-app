import React from 'react';
import { connect } from 'react-redux';
import { decrementCounter, incrementCounter } from '../actions/';
import Button from './button';

const Counter = ({ reduxCount, decrementCounter, incrementCounter}) => (
    <div>
        <h4> Redux counter :  {reduxCount}</h4> 
            <Button 
                key="decr" 
                placeholder="-" 
                onClick={ e => {
                    e.preventDefault();
                    decrementCounter() 
            }} />
            <Button
                key="incr"
                placeholder="+"
                onClick={ e => {
                        e.preventDefault();
                        incrementCounter()
            }} />
    </div>)

const mapStateToProps = ({ reduxCount }) => ({ reduxCount })

const mapDispatchToProps = dispatch => ({
    decrementCounter: () => dispatch( decrementCounter()),
    incrementCounter: () => dispatch( incrementCounter())     
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);