import React, { useState, useEffect } from "react";

import TaskBanner from "./components/TaskBanner";
import TaskCreator from "./components/TaskCreator";
import TaskRow from "./components/TaskRow";
import VisibilityControl from "./components/VisibilityControl";

const initialState = [
  { name: "Task One", done: false, id: 0 },
  { name: "Task Two", done: false, id: 1 },
  { name: "Task Three", done: true, id: 2 },
  { name: "Task Four", done: false, id: 3 },
];

function App() {
  const [userName, setUserName] = useState("Davi Pereira");
  const [taskItems, setTaskItems] = useState(initialState);
  const [showCompleted, setShowCompleted] = useState(true);

  useEffect(() => {
    let data = localStorage.getItem("tasks");

    if (data !== null) {
      setTaskItems(JSON.parse(data));
    } else {
      setUserName("Davi Pereira");
      setTaskItems(initialState);
      setShowCompleted(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  function createNewTask(taskName) {
    const isSelected = taskItems.findIndex(({ name }) => name === taskName) < 0;

    if (isSelected) {
      const data = {
        name: taskName,
        done: false,
        id: Date.now(),
      };

      setTaskItems([...taskItems, data]);
    }

    return null;
  }

  function removeTask(id) {
    setTaskItems(taskItems.filter((task) => task.id !== id));
  }

  function toggleTask(task) {
    setTaskItems(
      taskItems.map((item) =>
        item.name === task.name ? { ...item, done: !item.done } : item
      )
    );
  }

  function tasksTableRows(doneValue) {
    return taskItems
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleTask={toggleTask}
        />
      ));
  }

  return (
    <div id="app">
      <TaskBanner userName={userName} taskItems={taskItems} />

      <div className="container-fluid">
        <TaskCreator callBack={createNewTask} />

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{tasksTableRows(false)}</tbody>
        </table>

        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl
            description="Completed Tasks"
            isChecked={showCompleted}
            callBack={(checked) => setShowCompleted(checked)}
          />
        </div>

        {showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{tasksTableRows(true)}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
