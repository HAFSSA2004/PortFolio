import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./TaskList";
import AddTask from "./AddTask";
import Navbar from "../Home";
import './AddT.css'; // Ensure the correct path to the CSS file
function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Apply the 'todo-body' class to the body element when the component is mounted
  useEffect(() => {
    document.body.classList.add('todo-body');

    // Clean up by removing the class when the component unmounts
    return () => {
      document.body.classList.remove('todo-body');
    };
  }, []);

  // Fetch tasks from the API
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .then((response) => {
        const fetchedTasks = response.data.map(task => ({
          id: task.id,
          name: task.title,
          status: task.completed ? 'Completed' : 'Planned',
        }));
        setTasks(fetchedTasks);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task =>
    task.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
          <Navbar />
    <div className="App">
    
      {/* Navbar placed at the top */}
      <header>
       
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <img src="/task2.png" alt="Task Logo" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>

      {/* Main content */}
      <AddTask onAdd={addTask} />
      <TaskList 
        tasks={filteredTasks} 
        onUpdate={updateTask} 
        onDelete={deleteTask} 
      />
    </div>
    </div>
  );
}

export default TodoApp;
