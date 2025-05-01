import TaskInput from './components/TaskInput';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };
  return (
    <>
      <div>
        <h1>Lista de Tareas</h1>
        <TaskInput onAdd={addTask} />
      </div>
      
    </>
  )
}

export default App
