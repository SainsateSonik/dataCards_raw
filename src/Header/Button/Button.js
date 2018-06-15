import React from 'react';

export const Button = (props) => {
  const toggleView = () => {
    props.toggle();
  }
  return(
    <button className="taskToggleButton" onClick={toggleView}>{props.label}</button>
  );
}
