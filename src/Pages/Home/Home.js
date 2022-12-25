import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import InfoCards from "./Banner/InfoCards";
import DentalCare from "../DentalCare/DentalCare";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonial/Testimonial";
const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <DentalCare></DentalCare>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
