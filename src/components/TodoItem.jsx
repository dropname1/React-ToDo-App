import React from 'react'

function TodoItem({title, id, completed}) {
  const checked = (event) => {
      let item = event.target
      item.parentElement.style.textDecoration = 'line-through'
  }
  const removeTask = (event) => {
    let item = event.target
    item.parentElement.parentElement.style.display = 'none';
  }

  return (
    <div className="task">
            <div className="check_task_wrapper">
              <input 
              id='check'
              type="checkbox"
              className="check"
              defaultChecked={false}
              onClick={checked}
              />
              <label htmlFor="check" className='label'></label>
              <div className="task_text">{title}</div>
            </div>
        <div onClick={removeTask} className="close">
          <div className='close_text' >&times;</div>
        </div>
  </div>
  )
}

export default TodoItem