import React from "react";

const TaskBanner = ({ userName, taskItems }) => (
  <h4 className="bg-primary text-white text-center p-4">
    {userName}'s Tasks App ({taskItems.filter((task) => !task.done).length})
    tasks to do.
  </h4>
);

export default TaskBanner;
