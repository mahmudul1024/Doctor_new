import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatement",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum nihil eveniet a.",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Treatement",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum nihil eveniet a.",
      img: cavity,
    },
    {
      id: 3,
      name: "whitening Treatement",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsum nihil eveniet a.",
      img: whitening,
    },
  ];
  return (
    <div className="mt-16 font-googFont2  text-xl">
      <div className="text-center">
        <h3 className="text-3xl  font-bold text-green-400 uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {servicesData.map((serve) => (
          <Service key={serve.id} serve={serve}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
