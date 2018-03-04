import React from 'react'

// Counter
import Counter from '../container/counter/'
import Incr    from '../container/counter/increment'
import Decr    from '../container/counter/decrement'
import Reset   from '../container/counter/reset'

// Todo app
import AddTodo from '../container/todo/addTodo'
import FilterList  from '../container/todo/filterList'
import FilterLink from '../container/todo/filterLink'

/* This is just a presentationnal Component */
const App = () => {
    return(
        <div style = {{'margin': 40}}>
            <h1>My redux app</h1>
            <h2>Counter</h2>
            <Counter/><br />
            <Incr />
            <Decr />
            <Reset />
            <h2>To do List</h2>
            <AddTodo />
            <FilterList />
            <FilterLink />
        </div>
    )}

export default App