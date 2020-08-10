import React from "react";

const VisibilityControl = ({ isChecked, callBack, description }) => (
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      id="form-check-label"
      checked={isChecked}
      onChange={(event) => callBack(event.target.value)}
    />
    <label htmlFor="form-check-label">Show {description}</label>
  </div>
);

export default VisibilityControl;
