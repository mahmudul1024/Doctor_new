import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointCard from "./AppointCard";
import BookingModals from "../../assets/components/BookingModals";
import { useQuery } from "@tanstack/react-query";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const { data: appointmentOptions = [] } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentOptions");
      const data = await res.json();
      return data;
    },
  });

  // useEffect(() => {
  //   fetch("http://localhost:5000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOptions(data));
  // }, []);
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
