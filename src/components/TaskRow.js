import React from 'react';
import PropTypes from 'prop-types';

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

TaskRow.propTypes = {
  toggleTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired
}

export default TaskRow;
