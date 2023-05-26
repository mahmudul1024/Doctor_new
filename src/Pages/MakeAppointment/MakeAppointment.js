import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButtons from "../../assets/components/PrimaryButtons";
import { Fade } from "react-reveal";
import ThreeDImage from "../../ThreeDImage";

const MakeAppointment = () => {
  return (
    <Fade bottom>
      <section
        className="mt-20 font-googFont2 text-2xl"
        style={{ background: `url(${appointment})` }}
      >
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={doctor}
              className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl"
            />
            <div className="w-1/2">
              <h4 className="text-4xl text-green-400 font-bold py-3">
                Appointment
              </h4>
              <h1 className="text-2xl text-white font-bold">
                Make An Appoinment Today
              </h1>
              <p className="py-6 text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <PrimaryButtons>Get Started</PrimaryButtons>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default MakeAppointment;
