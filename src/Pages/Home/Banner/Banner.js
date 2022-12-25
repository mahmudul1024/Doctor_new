import React from "react";
import chairImage from "../../../assets/images/chair.png";
import bgImage from "../../../assets/images/bg.png";
const Banner = () => {
  return (
    <div className="hero ">
      {/* <img src={bgImage} className="  bg-center w-full bg-cover " /> */}
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chairImage} className=" rounded-lg shadow-2xl lg:w-1/2" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
