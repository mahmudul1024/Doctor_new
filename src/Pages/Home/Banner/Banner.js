import React from "react";
import chairImage from "../../../assets/images/chair.png";
import bgImage from "../../../assets/images/bg.png";
import Fade from "react-reveal/Fade";
const Banner = () => {
  return (
    <div className="hero  sm: h-[80vh] mb-16">
      {/* <img src={bgImage} className="  bg-center w-full bg-cover " /> */}

      <div className="hero-content flex-col lg:flex-row-reverse">
        <Fade right>
          <img
            src={chairImage}
            className=" rounded-lg shadow-2xl lg:w-1/2 w-3/4 md:w-1/2"
          />
        </Fade>
        <Fade left>
          <div>
            <h1 className="text-5xl font-bold font-googleFont">
              Arzttermine online{" "}
              <span className="text-green-700 text-6xl">buchen</span>
            </h1>
            <p className="py-6 font-googFont2 text-xl">
              Buchen Sie Ihren Arzttermin einfach und sicher in nur 30 Sekunden.
              Rund um die Uhr und ohne Wartezeit. Mit automatischer
              Terminerinnerung per SMS.
            </p>
            <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-none font-googFont3  text-2xl">
              Termin Buchen
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
