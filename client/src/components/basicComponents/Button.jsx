import React from 'react';

function Button({ children, type = "primary-btn", ...props }) {
  return (
    <button className={`button ${type}`} {...props}>{children}</button>
  );
}

export default Button;