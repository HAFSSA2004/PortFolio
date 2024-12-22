import React, { useState } from 'react';

function AddTask({ onAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      const newTask = {
        id: Date.now(),
        name: name.trim(),
        status: 'Planned',
      };
      onAdd(newTask);
      setName('');
    } else {
      alert('Please fill in all the fields.');
    }
  };

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="What is your task for today?" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required
      />
      <button type='submit' className='add-task'>Add task</button>
      
      
    </form>
  );
}

export default AddTask;
