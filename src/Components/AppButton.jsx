import React from "react";

const AppButton = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="connect--wallet">
      {title}
    </button>
  );
};

export default AppButton;
