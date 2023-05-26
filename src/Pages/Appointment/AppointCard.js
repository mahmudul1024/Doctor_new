import React from "react";

const AppointCard = ({ appCard, setTreatment }) => {
  const { name, slots, price } = appCard;
  return (
    <div className="card shadow-xl mx-10 text-xl">
      <div className="card-body text-center">
        <h2 className="text-2xl font-bold  ">{name}</h2>
        <p>{slots?.length > 0 ? slots[0] : "Try Another Day"}</p>
        <p>
          {slots?.length} slot {slots?.length > 1 ? "spaces" : "space"}{" "}
          available
        </p>
        <p className="font-bold text-2xl">$ {price}</p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            // disabled={slots?.length === 0}
            className="btn bg-gradient text-white border-none font-googFont3  text-2xl  "
            onClick={() => setTreatment(appCard)}
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointCard;
