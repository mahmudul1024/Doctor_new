import React from "react";

const PrimaryButtons = ({ children }) => {
  return (
    <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-none">
      {children}
    </button>
  );
};

export default PrimaryButtons;
