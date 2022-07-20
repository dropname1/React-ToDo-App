import './App.css';
import React, {useState}from 'react';
import Todolist from './components/Todolist';

function App() {
  const todosArray = [
    { id: 1, title: "leran JavaScript", completed: false },
    { id: 2, title: "leran React library", completed: true },
    { id: 3, title: "leran useState huk", completed: false }
  ]

  const [todos, setTodos] = useState(todosArray)
  const [todoTitle,setTodoTitle] = useState('')

  function addTask (event) {

      if (event.key === 'Enter' && event.target.value !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ]);
      setTodoTitle('');
      event.target.value =''
    }
  }

  return (
    <div className="App">
      <div className="todo_main_wrapper">
        <div className="title_input_wrapper">
          <h1>Todo App</h1>
          <div className="input_wrapper">
            <input 
            type="text" 
            className="input" 
            placeholder="Enter Task" 
            onChange={(event) => {setTodoTitle(event.target.value)}}
            onKeyPress={addTask}
            />
          </div>
        </div>
        <Todolist todos={todos} />
      </div>
    </div>
  );
}

export default App;
