import React from "react";

const Loading = () => {
  return (
    <div className="text-center">
      <div className=" radial-progress text-primary" style={{ "--value": 70 }}>
        70%
      </div>
    </div>
  );
};

export default Loading;
