import React from 'react';

const Alert = props => (
  <div class={`alert alert-${props.color}`} role="alert">
    {props.color === "danger" ? "You Guessed That Already! Game Over! Click an image to play again" : "Good job keep clicking!"}
  </div>
)

export default Alert;
