import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointCard from "./AppointCard";
import BookingModals from "../../assets/components/BookingModals";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

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
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap">
        {appointmentOptions.map((option) => (
          <AppointCard
            key={option._id}
            appCard={option}
            setTreatment={setTreatment}
          ></AppointCard>
        ))}
      </div>
      {treatment && (
        <BookingModals
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModals>
      )}
    </section>
  );
};

export default AvailableAppointments;