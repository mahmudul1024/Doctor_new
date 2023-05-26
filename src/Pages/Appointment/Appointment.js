import React, { useState } from "react";
import ThreeDImage from "../../ThreeDImage";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";
import "./Appoint.css";
const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="mt-32 back">
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentBanner>
      <AvailableAppointments
        selectedDate={selectedDate}
      ></AvailableAppointments>
    </div>
  );
};

export default Appointment;
