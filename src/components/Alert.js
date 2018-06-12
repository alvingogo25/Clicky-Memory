import React from 'react';
// game alert message
const Alert = props => (
  <div class={`alert alert-${props.color}`} role="alert">
    {props.message}
  </div>
);

export default Alert;
