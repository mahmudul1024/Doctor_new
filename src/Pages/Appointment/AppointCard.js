import React from "react";

const AppointCard = ({ appCard }) => {
  const { name, slots } = appCard;
  return (
    <div className="card shadow-xl mx-10 ">
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold text-secondary ">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots.length} slot {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <button className=" text-white btn btn-primary">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointCard;
