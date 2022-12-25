import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div
      className={` p-6 card text-white card-side bg-base-100 shadow-xl ${bgClass}`}
    >
      <figure>
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <p>{name}</p>
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
