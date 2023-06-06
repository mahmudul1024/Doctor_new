import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../assets/components/Context/AuthProvider";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const url = `https://doctor-praxis-server.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();

      return data;
    },
  });
  console.log("bookings paisi", bookings);

  return (
    <div className="">
      <h3 className="text-3xl mb-5">MyAppointments {bookings?.length}</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatement</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, ind) => (
              <tr key={ind}>
                <th>{ind}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking?.slot}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn bg-gradient text-white border-none font-googFont3  text-2xl">
                        Pay
                      </button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <button className="btn bg-gradient text-white border-none font-googFont3  text-2xl">
                      Paid
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
