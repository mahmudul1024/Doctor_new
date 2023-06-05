import React from "react";

import doctorImage from "../../assets/images/doctor.png";
import ThreeDImage from "../../ThreeDImage";

const About = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${doctorImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <ThreeDImage></ThreeDImage>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold ">Who we are ?</h1>
          <p className="mb-5 font-googFont2 font-bold">
            Doctors Praxis is a leading healthcare provider committed to
            delivering high-quality medical services to patients. With a team of
            experienced doctors and state-of-the-art facilities, we strive to
            provide the best possible care and treatment options for our
            patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
