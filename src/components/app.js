
import React from 'react'
import AddCounter from '../container/addCounter'
import RemoveCounter from '../container/removeCounter'
import Counter from '../container/counter'
import Todo from '../container/todo'
import AddTodo from '../container/addTodo'

/* This is just a presentationnal Component */
const App = () => {
    return(
        <div>
            <h1>My redux app</h1>
            <Counter></Counter><br />
            <AddCounter />
            <RemoveCounter />
            <Todo />
            <AddTodo />
        </div>
    )}

export default App