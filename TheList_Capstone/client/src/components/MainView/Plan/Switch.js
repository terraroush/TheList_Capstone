import React from "react";
import "./Switch.css";

const Switch = ({ isOn, id, handleToggle }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={id}
        type="checkbox"
      />
      <label
        style={{ background: isOn && "#06D6A0" }}
        className="react-switch-label"
        htmlFor={id}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
