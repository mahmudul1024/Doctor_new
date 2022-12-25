import React from "react";
import PrimaryButtons from "../../assets/components/PrimaryButtons";

const DentalCare = () => {
  return (
    <div>
      <div className="hero mt-16">
        <div className="hero-content flex-col  lg:flex-row justify-end    ">
          <div className="">
            <img
              src="https://placeimg.com/260/400/arch"
              className="lg:mr-8 rounded-lg shadow-2xl "
            />
          </div>
          <div className="w-1/2 ml-8">
            <h1 className="text-3xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryButtons>Dental Care</PrimaryButtons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DentalCare;
