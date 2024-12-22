import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTrash, faEdit, faSave, faCircleNotch, faClock } from '@fortawesome/free-solid-svg-icons';

function TaskItem({ task, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(task.name);
  const [selectedStatus, setSelectedStatus] = useState(task.status);

  const handleToggleStatus = () => {
    let updatedStatus;
    if (task.status === 'Planned') {
      updatedStatus = 'In Progress';
    } else if (task.status === 'In Progress') {
      updatedStatus = 'Completed';
    } else {
      return; // Don't allow changes if already "Completed"
    }
    onUpdate(task.id, { status: updatedStatus });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editName.trim()) {
      onUpdate(task.id, { name: editName.trim(), status: selectedStatus });
      setIsEditing(false);
    } else {
      alert('Task name cannot be empty.');
    }
  };

  const renderStatusIcon = () => {
    if (task.status === 'Planned') {
      return <FontAwesomeIcon icon={faClock} style={{ color: 'blue', marginLeft: '10px' }} />; // Clock icon for "Planned"
    } else if (task.status === 'In Progress') {
      return <FontAwesomeIcon icon={faCircleNotch} spin style={{ color: 'orange', marginLeft: '10px' }} />;
    }
    return null; // No icon for "Completed", only line-through
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value); // Update the selected status when editing
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="Edit task name"
          />
          <select value={selectedStatus} onChange={handleStatusChange}>
            <option value="Planned">Planned</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <button onClick={handleSave} className="save-btn">
            <FontAwesomeIcon icon={faSave} />
          </button>
        </>
      ) : (
        <>
          <div className="task-content">
            <input
              type="checkbox"
              checked={task.status === 'Completed'}
              onChange={handleToggleStatus}
              disabled={task.status === 'Completed'}
            />
            <span
              style={{
                textDecoration: task.status === 'Completed' ? 'line-through' : 'none',
                textDecorationColor: task.status === 'Completed' ? 'gray' : 'inherit',
              }}
            >
              {task.name}
            </span>
            {renderStatusIcon()}
          </div>
          <div className="btns">
            <button onClick={handleEdit} className="edit-btn">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button onClick={() => onDelete(task.id)} className="delete-btn">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
