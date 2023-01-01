import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "./Context/AuthProvider";
import toast from "react-hot-toast";

const BookingModals = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name: treatementName, slots } = treatment;
  const date = format(selectedDate, "PP");

  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const pname = form.pname.value;
    const slot = form.slot.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: treatementName,
      patient: pname,
      slot,
      email,
      phone,
    };
    // catching not nescessary and no need of tran/raect query
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          setTreatment(null);
          toast.success("booking confirmed");
          refetch();
        } else {
          setTreatment(null);
          toast.error(data.message);
        }
      })
      .catch((er) => console.error(er));

    console.log(booking);
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatementName}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full input-bordered"
            />
            <select name="slot" className="select select-bordered w-full ">
              {slots.map((slot, index) => (
                <option key={index}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="pname"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Your Email"
              className="input w-full input-bordered "
            />

            <input
              type="tel"
              name="phone"
              placeholder="+49"
              className="input w-full input-bordered "
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full input-bordered"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModals;
