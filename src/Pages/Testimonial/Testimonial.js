import React from "react";
import quote from "../../assets/icons/quote.svg";
import People1 from "../../assets/images/people1.png";
import People2 from "../../assets/images/people2.png";
import People3 from "../../assets/images/people3.png";
import Testimon from "./Testimon";

const Testimonial = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      img: People1,
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam",
      location: "California",
    },
    {
      _id: 2,
      name: "Micheal Mike",
      img: People2,
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam",
      location: "New York",
    },
    {
      _id: 3,
      name: "Robert Carles",
      img: People3,
      review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam",
      location: "Texas",
    },
  ];
  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">What Our Patients Say</h2>
        </div>
        <div>
          <figure>
            <img src={quote} alt="" className="w-24 lg:w-48" />
          </figure>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {reviews.map((rev) => (
          <Testimon key={rev._id} review={rev}></Testimon>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
