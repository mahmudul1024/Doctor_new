import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointCard from "./AppointCard";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);

  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  }, []);
  return (
    <section className="mt-16">
      <p className="text-center font-bold text-secondary">
        Available Appointments{format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {appointmentOptions.map((option) => (
          <AppointCard key={option._id} appCard={option}></AppointCard>
        ))}
      </div>
    </section>
  );
};

export default AvailableAppointments;
