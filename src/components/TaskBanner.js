import React from "react";
import PropTypes from "prop-types";

const TaskBanner = ({ userName, taskItems }) => (
  <h4 className="bg-primary text-white text-center p-4" data-testid="title">
    {userName}'s Tasks App ({taskItems.filter((task) => !task.done).length})
    tasks to do.
  </h4>
);

TaskBanner.propTypes = {
  userName: PropTypes.string.isRequired,
  taskItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      done: PropTypes.bool,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default TaskBanner;
