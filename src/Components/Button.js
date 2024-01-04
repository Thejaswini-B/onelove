import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <div>
      <button className="btn btn-primary btn1" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
