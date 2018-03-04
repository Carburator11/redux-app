import React from 'react'
import TodoItem from './todoItem'

// short version of props.list
const TodoList = ({ list }) => 
    (<ul>
        {list.map((item, index) => { 
            return( <TodoItem
                        id= {index}
                        key = {index} 
                        text= {item.text}
                        complete = {item.completed}
                    />)
            })
        }
    </ul>)

export default TodoList


      

  

