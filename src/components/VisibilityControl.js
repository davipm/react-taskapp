import React from "react";
import PropTypes from "prop-types";

const VisibilityControl = ({ isChecked, callBack, description }) => (
  <div className="form-check">
    <input
      type="checkbox"
      className="form-check-input"
      id="form-check-label"
      data-testid="visibility"
      checked={isChecked}
      onChange={(event) => callBack(event.target.value)}
    />
    <label htmlFor="form-check-label">Show {description}</label>
  </div>
);

VisibilityControl.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  callBack: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

export default VisibilityControl;
