import React from "react";

const Dashboard = () => {
  return (
    <div className="grid   grid-rows-1 h-[100vh] ">
      <div className="bg-primary  col-start-1  col-end-4 h-full  ">
        <div className="">
          <h2>I am first</h2>
        </div>
      </div>

      <div className="bg-accent text-white  col-start-4 col-end-12 h-full ">
        <h2>I am nai</h2>
      </div>
    </div>
  );
};

export default Dashboard;
