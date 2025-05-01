import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

import './App.css';

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

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <>
      <div>
        <h1>Lista de Tareas</h1>
        <TaskInput onAdd={addTask} />
        <TaskList 
          tasks={tasks} 
          onToggle={toggleTask} 
          onDelete={deleteTask} 
        />
      </div>
    </>
  );
}

export default App;
