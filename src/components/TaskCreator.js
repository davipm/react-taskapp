import React, { useState } from "react";

function TaskCreator({ callBack }) {
  const [newTaskName, setNewTaskName] = useState("");

  function updateNewTaskName(event) {
    setNewTaskName(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    callBack(newTaskName);
    setNewTaskName("");
  }

  return (
    <div className="my-1">
      <form onSubmit={onSubmit} className="d-flex align-items-center mb-3">
        <input
          type="text"
          placeholder="Task Name"
          className="form-control"
          value={newTaskName}
          onChange={updateNewTaskName}
        />

        <button className="btn btn-primary ml-3" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default TaskCreator;
