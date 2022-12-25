import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButtons from "../../assets/components/PrimaryButtons";

const MakeAppointment = () => {
  return (
    <section className="mt-20" style={{ background: `url(${appointment})` }}>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div className="w-1/2">
            <h4 className="text-lg text-primary font-bold">Appointment</h4>
            <h1 className="text-4xl text-white font-bold">
              Make An Appoinment Today
            </h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButtons>Get Started</PrimaryButtons>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
