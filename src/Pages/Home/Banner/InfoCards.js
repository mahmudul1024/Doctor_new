import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Öffnungszeiten",
      description: "von 9:00  bis 17.00 ",
      icon: clock,
      bgClass: "bg-gradient",
    },
    {
      id: 2,
      name: "Unsere Standorte",
      description: "Graben Str 47057 Duisburg ",
      icon: marker,
      bgClass: "bg-gradient",
    },
    {
      id: 3,
      name: "Kontakt",
      description: "+49 (0)176-30169377",
      icon: phone,
      bgClass: "bg-gradient",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
