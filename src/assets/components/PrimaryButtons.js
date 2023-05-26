import React from "react";

const PrimaryButtons = ({ children }) => {
  return (
    <button className="btn bg-gradient text-white border-none font-googFont3  text-2xl">
      {children}
    </button>
  );
};

export default PrimaryButtons;
