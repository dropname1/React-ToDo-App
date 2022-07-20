import React from 'react'
import TodoItem from './TodoItem'

function Todolist({todos}) {
  return (
    <div>
      <h2 className="task_title">Task's</h2>
        <div className="tasks_wrapper">
          {todos.map((item) =>{ return <TodoItem key={item.id} {...item}/>})}
      </div>
    </div>
  )
}

export default Todolist