import React from 'react';
import Button from './button';

const LocalCounter = ({count, incr, decr}) => (
    <div>
        <h4>Local counter : {count}</h4>
        <Button placeholder="+" onClick={incr}/>
        <Button placeholder="-" onClick={decr}/>
    </div>)

export default LocalCounter