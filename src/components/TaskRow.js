import React from 'react';

const TaskRow = ({ task, toggleTask, removeTask }) => (
  <tr key={task.id}>
    <td>{task.name}</td>
    <td>
      <input
        type="checkbox"
        checked={task.done}
        onChange={toggleTask}
      />
      
      <button
        className="btn btn-danger ml-3"
        onClick={() => removeTask(task.id)}
      >
        Remove
      </button>
    </td>
  </tr>
)

export default TaskRow;
