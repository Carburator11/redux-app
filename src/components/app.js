
import React from 'react'
import AddCounter from '../container/addCounter'
import RemoveCounter from '../container/removeCounter'
import Counter from '../container/counter'

const App = () => {
    return(
        <div>
            <h1>Counter app</h1>
            <Counter></Counter><br />
            <AddCounter />
            <RemoveCounter />
        </div>
    )}

export default App